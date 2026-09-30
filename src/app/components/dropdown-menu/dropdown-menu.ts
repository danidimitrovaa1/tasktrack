import { Component, computed, input, model, output, signal } from '@angular/core';
import { Icons } from '../icons/icons';
import { DropdownOption } from '../../models/dropdown.model';
import { Priority } from '../../models/task.model';
import { IconType } from '../../models/icon.model';

@Component({
  imports: [Icons],
  selector: 'app-dropdown-menu',
  styleUrl: './dropdown-menu.css',
  templateUrl: './dropdown-menu.html',
})
export class DropdownMenu {
  buttonTitle = input.required<string>();

  options = input.required<DropdownOption[]>();

  icon = input.required<IconType>();

  isOpen = signal(false);

  // Two-way signal so that the parent has access to the selected option
  selectedOption = model<DropdownOption | null>(null);

  iconColourClass = computed(() => this.selectedOption()?.iconStylesClass);

  toggleDropdown() {
    this.isOpen.update((open) => !open);
  }

  selectOption(option: DropdownOption) {
    this.selectedOption.set(option);
    this.isOpen.set(false);
  }

  close(): void {
    this.isOpen.set(false);
  }

  onBackdropClick(event: MouseEvent): void {
    this.close();
  }
}
