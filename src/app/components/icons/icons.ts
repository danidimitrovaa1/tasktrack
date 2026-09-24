import { Component, input } from '@angular/core';
import { IconType } from '../../models/icon.model';

@Component({
  imports: [],
  selector: 'app-icons',
  styleUrl: './icons.css',
  templateUrl: './icons.html',
})
export class Icons {
  // Receives the icon name from the parent sidebar
  icon = input.required<IconType>();
}
