import { Component, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'invisible-backdrop',
  styleUrl: './invisible-backdrop.css',
  templateUrl: './invisible-backdrop.html',
})
export class InvisibleBackdrop {
  backdropClick = output<void>();

  onBackdropClick() {
    this.backdropClick.emit();
  }
}
