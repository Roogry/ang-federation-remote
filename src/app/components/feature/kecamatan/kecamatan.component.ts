import { Component, effect, inject, input, output, } from '@angular/core';
import { DropdownFieldComponent } from '../../shared/dropdown-field/dropdown-field.component';
import { District, LocationService } from '../../../services/location.service';

@Component({
  selector: 'field-kecamatan',
  imports: [DropdownFieldComponent],
  templateUrl: './kecamatan.component.html',
  styleUrl: './kecamatan.component.scss'
})
export class KecamatanComponent {

  private location = inject(LocationService);

  regencyId = input.required<string>();
  resetTrigger = input<unknown>();
  items: District[] = [];
  selected = output<District>();

  constructor() {
    effect(() => {
      this.location.fetchDistricts(this.regencyId()).subscribe({
        next: (districts: District[]) => {
          this.items = districts;
        }
      });
    });
  }

  select(value: any) {
    console.log(value);
    this.selected.emit(value as District);
  }


}


