import { Component, inject, input, OnInit, output } from '@angular/core';
import { DropdownFieldComponent } from '../../shared/dropdown-field/dropdown-field.component';
import { LocationService, Regency } from '../../../services/location.service';

@Component({
  selector: 'app-kota',
  imports: [DropdownFieldComponent],
  templateUrl: './kota.component.html',
  styleUrl: './kota.component.scss'
})
export class KotaComponent implements OnInit {

  provinceId = input.required<string>();
  private location = inject(LocationService);
  items: Regency[] = [];

  selected = output<Regency>();

  ngOnInit(): void {
    this.location.fetchRegencies(this.provinceId()).subscribe({
      next: (regencies) => {
        this.items = regencies;
      }
    });
  }

  select(value: any) {
    console.log(value);
    this.selected.emit(value as Regency);
  }

}
