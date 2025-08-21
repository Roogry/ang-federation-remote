import { Component, input, output } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'dropdown',
  imports: [MatInputModule, MatFormFieldModule, MatSelectModule, CommonModule],
  templateUrl: './dropdown-field.component.html',
  styleUrl: './dropdown-field.component.scss'
})
export class DropdownFieldComponent {

  fieldName = input.required<string>();

  value = output();

  list = input.required<Item[]>();

  updateValue(event: any) {
    this.value.emit(event);
  }

}

export type Item = {
  id: string,
  name: string
}