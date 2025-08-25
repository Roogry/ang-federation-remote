import { Component, effect, inject, input, output } from '@angular/core';
import { DropdownFieldComponent } from '../../shared/dropdown-field/dropdown-field.component';
import { LocationService, Village } from '../../../services/location.service';

@Component({
  selector: 'app-kelurahan',
  imports: [DropdownFieldComponent],
  templateUrl: './kelurahan.component.html',
  styleUrl: './kelurahan.component.scss'
})
export class KelurahanComponent {

  districtId = input.required<string>();
  resetTrigger = input<unknown>();
  private location = inject(LocationService);
  items: Village[] = [];

  selected = output<Village>();

  constructor() {
    effect(() => {
      this.location.fetchVillages(this.districtId()).subscribe({
        next: (villages) => {
          this.items = villages;
        }
      });
    });
  }

  select(value: any) {
    this.selected.emit(value as Village);
  }
}
