import { Component, inject, input } from '@angular/core';
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

  provinceId = input.required<string>();
  items: District[] = [];

  constructor() {
    this.location.fetchDistricts(this.provinceId()).subscribe(
      (districts: District[]) => this.items = districts 
    )
  }


}


