import { Component, inject, input, OnInit, output } from '@angular/core';
import { DropdownFieldComponent } from '../../shared/dropdown-field/dropdown-field.component';
import { LocationService, Village } from '../../../services/location.service';

@Component({
  selector: 'app-kelurahan',
  imports: [DropdownFieldComponent],
  templateUrl: './kelurahan.component.html',
  styleUrl: './kelurahan.component.scss'
})
export class KelurahanComponent implements OnInit {

  districtId = input.required<string>();
  private location = inject(LocationService);
  items: Village[] = [];

  selected = output<Village>();

  ngOnInit(): void {
    this.location.fetchVillages(this.districtId()).subscribe({
      next: (villages) => {
        this.items = villages;
      }
    });
  }

  select(value: any) {
    console.log(value);
    this.selected.emit(value as Village);
  }


}
