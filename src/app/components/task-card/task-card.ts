import { Component, computed, input, output, signal } from '@angular/core';
import { Priority, Task } from '../../models/task.model';
import { DropdownMenu } from '../dropdown-menu/dropdown-menu';
import { DueDate } from '../due-date/due-date';
import { BtnCancel } from '../btn-cancel/btn-cancel';
import { BtnCreate } from '../btn-create/btn-create';
import { Icons } from '../icons/icons';
import { DatePipe } from '@angular/common';

@Component({
  imports: [DropdownMenu, DueDate, BtnCancel, BtnCreate, Icons, DatePipe],
  selector: 'app-task-card',
  styleUrl: './task-card.css',
  templateUrl: './task-card.html',
})
export class TaskCard {
  Priority = Priority;

  // "I have an event called closed, and when I emit it, I'm telling my parent that I've been closed."
  closed = output<void>();

  isOpen = signal(false);

  taskTitle = signal('');

  taskDescription = signal('');

  selectedPriority = signal<Priority | 'Priority'>('Priority');

  onTitleInput(event: Event) {
    const textarea = event.target as HTMLTextAreaElement;
    const value = textarea.value;
    this.taskTitle.set(value);
  }

  onDescriptionInput(event: Event) {
    const textarea = event.target as HTMLTextAreaElement;
    const value = textarea.value;
    this.taskDescription.set(value);
  }

  toggleDropdown() {
    this.isOpen.update((open) => !open);
  }

  selectPriority(priority: Priority) {
    this.selectedPriority.set(priority);
    this.isOpen.set(false);
  }

  selectedDueDate = signal<Date | null>(null);

  buttonTitle = 'Priority';

  datePickerButtonTitle = 'Due date';

  dropdownOptions = [
    {
      id: 'low',
      label: 'Low Priority',
      stylesClass:
        'block w-fit px-7 py-1 text-left cursor-pointer rounded-full bg-[#EEFBF3] text-[#56C250] font-medium text-left',
      selectedStylesClass: 'w-fit text-left cursor-pointer text-[#56C250] font-medium text-left',
      iconStylesClass: 'text-[#56C250]',
    },
    {
      id: 'medium',
      label: 'Medium Priority',
      stylesClass:
        'block w-fit px-7 py-1 text-left cursor-pointer rounded-full bg-[#FEF3EA] text-[#FF7034] font-medium text-left',
      selectedStylesClass: 'w-fit text-left cursor-pointer text-[#FF7034] font-medium text-left',
      iconStylesClass: 'text-[#FF7034]',
    },
    {
      id: 'high',
      label: 'High Priority',
      stylesClass:
        'block w-fit px-7 py-1 text-left cursor-pointer rounded-full bg-[#FDEFEE] text-[#E60023] font-medium text-left',
      selectedStylesClass: 'w-fit text-left cursor-pointer text-[#E60023] font-medium text-left',
      iconStylesClass: 'text-[#E60023]',
    },
  ];

  task = input<Task | null>(null);

  isCreating = computed(() => !this.task());
  isEditing = signal<boolean>(false);

  saveTask = output<Task>();

  onSubmit(event: Event) {
    // Prevent default browser refresh
    event.preventDefault();

    // Get values from inputs
    // Only generate an id if we're creating, otherwise, reuse the existing id
    const id = this.isCreating() ? crypto.randomUUID() : this.task()!.id;
    const title = this.taskTitle().trim();
    const description = this.taskDescription().trim();
    const dueDate = (this.selectedDueDate() ?? new Date()).toISOString().split('T')[0];
    const priority =
      this.selectedPriority() === 'Priority' ? Priority.Low : (this.selectedPriority() as Priority);

    // Validate input
    if (!title) {
      return;
    }

    // Assemble task instance by constructing the taskToSave object
    const taskToSave: Task = {
      id,
      title,
      description,
      dueDate,
      priority,
    };

    // Save the task via a service call
    this.saveTask.emit({ ...taskToSave });

    // Reset and close the modal
    this.closed.emit();
  }

  editTask() {
    this.isEditing.set(true);
  }

  selectedPriorityOption = computed(() => {
    const currentTask = this.task();
    if (!currentTask?.priority) {
      return this.dropdownOptions[0]; // Fallback to Low Priority if missing
    }

    // Convert both to string/lowercase to guarantee matching regardless of enum representation
    const taskPriorityStr = String(currentTask.priority).toLowerCase();

    return (
      this.dropdownOptions.find((option) => option.id.toLowerCase() === taskPriorityStr) ??
      this.dropdownOptions[0] // Fallback safety
    );
  });
}
