import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  variant = input<'primary' | 'secondary' | 'success'>('primary');
  disabled = input<boolean>(false);
  onClick = output<Event>();

  handleClick(event: Event): void {
    if (!this.disabled()) {
      this.onClick.emit(event);
    }
  }
}