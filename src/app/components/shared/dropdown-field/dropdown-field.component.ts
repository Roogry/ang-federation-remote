import { Component, input } from '@angular/core';
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

  list = input.required<Item[]>();
}

export type Item = {
  id: string,
  name: string
}