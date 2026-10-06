import { Component, input, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'confirmation-dialog',
  styleUrl: './confirmation-dialog.css',
  templateUrl: './confirmation-dialog.html',
})
export class ConfirmationDialog {
  confirm = output<void>();
  discard = output<void>();

  dialogTitle = input<string>();
  dialogDescription = input<string>();
  discardButtonTag = input<string>();
  confirmButtonTag = input<string>();
}
