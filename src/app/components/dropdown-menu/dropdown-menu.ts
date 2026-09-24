import { Component, computed, input, output, signal } from '@angular/core';
import { Icons } from '../icons/icons';
import { DropdownOption } from '../../models/dropdown.model';

@Component({
  imports: [Icons],
  selector: 'app-dropdown-menu',
  styleUrl: './dropdown-menu.css',
  templateUrl: './dropdown-menu.html',
})
export class DropdownMenu {
  closed = output<void>();

  isOpen = signal(false);

  selectedOption = signal<DropdownOption | null>(null);

  toggleDropdown() {
    this.isOpen.update((open) => !open);
  }

  selectOption(option: DropdownOption) {
    this.selectedOption.set(option);
    this.isOpen.set(false);
  }

  buttonTitle = input<string>();

  options = input<DropdownOption[]>([]);

  iconColourClass = computed(() => this.selectedOption()?.iconStylesClass);
}
