import { Component, output, signal } from '@angular/core';
import { ActiveTasks } from '../../active-tasks';
import { Priority } from '../../../../models/task.model';
import { Icons } from '../../../../components/icons/icons';
import { DropdownMenu } from '../../../../components/dropdown-menu/dropdown-menu';
import { DueDate } from '../../../../components/due-date/due-date';

@Component({
  imports: [Icons, DropdownMenu, DueDate],
  selector: 'app-add-task',
  styleUrl: './add-task.component.css',
  templateUrl: './add-task.component.html',
})
export class AddTaskComponent {
  Priority = Priority;

  // "I have an event called closed, and when I emit it, I'm telling my parent that I've been closed."
  closed = output<void>();

  isOpen = signal(false);

  selectedPriority = signal<Priority | 'Priority'>('Priority');

  toggleDropdown() {
    this.isOpen.update((open) => !open);
  }

  selectPriority(priority: Priority) {
    this.selectedPriority.set(priority);
    this.isOpen.set(false);
  }

  buttonTitle = 'Priority';

  options = [
    {
      id: 'low',
      label: 'Low Priority',
      stylesClass:
        'block w-fit px-7 py-2 m-2 text-left cursor-pointer rounded-full bg-[#EEFBF3] text-[#56C250] font-medium text-left',
      selectedStylesClass: 'w-fit text-left cursor-pointer text-[#56C250] font-medium text-left',
      iconStylesClass: 'text-[#56C250]',
    },
    {
      id: 'medium',
      label: 'Medium Priority',
      stylesClass:
        'block w-fit px-7 py-2 m-2 text-left cursor-pointer rounded-full bg-[#FEF3EA] text-[#FF7034] font-medium text-left',
      selectedStylesClass: 'w-fit text-left cursor-pointer text-[#FF7034] font-medium text-left',
      iconStylesClass: 'text-[#FF7034]',
    },
    {
      id: 'high',
      label: 'High Priority',
      stylesClass:
        'block w-fit px-7 py-2 m-2 text-left cursor-pointer rounded-full bg-[#FDEFEE] text-[#E60023] font-medium text-left',
      selectedStylesClass: 'w-fit text-left cursor-pointer text-[#E60023] font-medium text-left',
      iconStylesClass: 'text-[#E60023]',
    },
  ];

  datePickerButtonTitle = 'Due date';
}
