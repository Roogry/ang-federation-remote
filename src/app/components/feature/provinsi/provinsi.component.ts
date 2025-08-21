import { Component, inject, OnInit, output } from '@angular/core';
import { LocationService, Province } from '../../../services/location.service';
import { DropdownFieldComponent } from "../../shared/dropdown-field/dropdown-field.component";

@Component({
  selector: 'app-provinsi',
  imports: [DropdownFieldComponent],
  templateUrl: './provinsi.component.html',
  styleUrl: './provinsi.component.scss'
})
export class ProvinsiComponent implements OnInit {

  private location = inject(LocationService);
  items: Province[] = [];

  selected = output<Province>();

  ngOnInit(): void {
    this.location.fetchProvinces().subscribe({
      next: (provinces) => {
        this.items = provinces
      }
    })
  }

  select(value: any) {
    console.log(value);
    this.selected.emit(value as Province);
  }

}
