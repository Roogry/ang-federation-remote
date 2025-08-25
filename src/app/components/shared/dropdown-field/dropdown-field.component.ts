import { Component, effect, input, model, output } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select'; 
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'dropdown',
  imports: [
    CommonModule, 
    FormsModule, 
    MatInputModule, 
    MatFormFieldModule, 
    MatSelectModule
  ],
  templateUrl: './dropdown-field.component.html',
  styleUrl: './dropdown-field.component.scss'
})
export class DropdownFieldComponent {

  fieldName = input.required<string>();
  resetTrigger = input<unknown>();
  value = output<Item | undefined>();

  list = input.required<Item[]>();
  selectedValue = model<Item | undefined>(undefined);

  constructor() {
    effect(() => {
      this.value.emit(this.selectedValue());
    });

    effect(() => {
      this.resetTrigger(); 
      this.selectedValue.set(undefined);

    }, { allowSignalWrites: true });
  }
}

export type Item = {
  id: string,
  name: string
}