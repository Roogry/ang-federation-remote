import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-location-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './location-selector.component.html',
  styleUrl: './location-selector.component.scss'
})
export class LocationSelectorComponent {
  @Input() variant: 'primary' | 'secondary' | 'success' = 'primary';
  @Input() disabled = false;
  @Output() onClick = new EventEmitter<Event>();
}
