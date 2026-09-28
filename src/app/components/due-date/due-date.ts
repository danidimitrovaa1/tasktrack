import { Component, model, signal, computed, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { Icons } from '../icons/icons';

@Component({
  imports: [MatCardModule, MatDatepickerModule, MatNativeDateModule, Icons],
  selector: 'app-due-date',
  styleUrl: './due-date.css',
  templateUrl: './due-date.html',
})
export class DueDate {
  datePickerButtonTitle = input<string>();

  // Two-way signal so that the parent has access to the selected date
  selectedDate = model<Date | null>();

  isOpen = signal<boolean>(false);

  // Disabling past dates
  // TODO: Pass to <mat-calendar [minDate]="minDate()"> to grey out past dates
  minDate = computed(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return today;
  });

  formattedDate = computed(() => {
    // Guard check
    const date = this.selectedDate();
    if (!date) return null;

    const day = date.getDate();
    const month = date.toLocaleString('en-GB', { month: 'short' });
    const year = date.getFullYear();

    return `${day} ${month} ${year}`;
  });

  toggleDatePicker() {
    this.isOpen.update((open) => !open);
  }

  // Define the selected date and close the date picker popup
  selectDate(date: Date | null): void {
    this.selectedDate.set(date);
    this.isOpen.set(false);
  }

  // Shortcuts for today, tomorrow, and no date
  selectToday(): void {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    this.selectDate(today);
  }

  selectTomorrow(): void {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    this.selectDate(tomorrow);
  }

  selectNoDate(): void {
    this.selectDate(null);
  }

  close(): void {
    this.isOpen.set(false);
  }

  onBackdropClick(event: MouseEvent) {
    this.close();
  }
}
