import { Component, effect, inject, input, output } from '@angular/core';
import { DropdownFieldComponent } from '../../shared/dropdown-field/dropdown-field.component';
import { LocationService, Regency } from '../../../services/location.service';

@Component({
  selector: 'app-kota',
  imports: [DropdownFieldComponent],
  templateUrl: './kota.component.html',
  styleUrl: './kota.component.scss'
})
export class KotaComponent {

  private location = inject(LocationService);

  provinceId = input.required<string>();
  resetTrigger = input<unknown>();
  items: Regency[] = [];
  selected = output<Regency>();

  constructor() {
    effect(() => {
      this.location.fetchRegencies(this.provinceId()).subscribe({
        next: (regencies) => {
          this.items = regencies;
        }
      });
    });
  }

  select(value: any) {
    this.selected.emit(value as Regency);
  }
}
