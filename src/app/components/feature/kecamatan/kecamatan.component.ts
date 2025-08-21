import { Component, inject, input, output, } from '@angular/core';
import { DropdownFieldComponent } from '../../shared/dropdown-field/dropdown-field.component';
import { District, LocationService } from '../../../services/location.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'field-kecamatan',
  imports: [DropdownFieldComponent],
  templateUrl: './kecamatan.component.html',
  styleUrl: './kecamatan.component.scss'
})
export class KecamatanComponent {

  private location = inject(LocationService);

  regencyId = input.required<string>();
  items: District[] = [];
  selected = output<District>();

  constructor() {
  }

  ngOnInit(): void {
    this.location.fetchDistricts(this.regencyId()).subscribe(
      (districts: District[]) => {
        console.log(districts);
        this.items = districts;
      }
    );
  }

  select(value: any) {
    console.log(value);
    this.selected.emit(value as District);
  }


}


