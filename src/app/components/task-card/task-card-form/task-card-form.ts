import { Component, computed, effect, inject, input, OnInit, output, signal } from '@angular/core';
import { DropdownMenu } from '../../dropdown-menu/dropdown-menu';
import { DueDate } from '../../due-date/due-date';
import { BtnCreate } from '../../btn-create/btn-create';
import { BtnCancel } from '../../btn-cancel/btn-cancel';
import { Task } from '../../../models/task.model';
import { PRIORITY_DROPDOWN_OPTIONS } from '../../../shared/constants/priority.constants';
import { Priority } from '../../../models/task.model';
import { DropdownOption } from '../../../models/dropdown.model';
import { IconType } from '../../../models/icon.model';
import { TasksService } from '../../../services/tasks.service';
import { InvisibleBackdrop } from '../../invisible-backdrop/invisible-backdrop';
import { ConfirmationDialog } from '../../confirmation-dialog/confirmation-dialog';

@Component({
  imports: [DropdownMenu, DueDate, BtnCreate, BtnCancel, InvisibleBackdrop, ConfirmationDialog],
  selector: 'task-card-form',
  styleUrl: './task-card-form.css',
  templateUrl: './task-card-form.html',
})
export class TaskCardForm {
  tasksService = inject(TasksService);

  task = input<Task | null>(null);

  isEditMode = input<boolean>(false);

  closed = output<void>();

  isConfirmDialogOpen = signal<boolean>(false);

  toggleEdit = output<boolean>();

  mode = computed(() => (this.task() ? 'edit' : 'create'));

  taskId = signal('');
  taskTitle = signal('');
  taskDescription = signal('');
  taskPriority = signal<DropdownOption | null>(null);
  taskDueDate = signal<Date | null>(null);

  priorityDropdownOptions = PRIORITY_DROPDOWN_OPTIONS;
  icon: IconType = 'priority';
  buttonTitle = 'Priority';
  datePickerButtonTitle = 'Due date';

  dialogTitle = 'Delete task';
  dialogDescription = 'Are you sure you want to delete this task? This action cannot be undone.';
  discardButtonTag = 'Cancel';
  confirmButtonTag = 'Delete';

  // instead of ngOnInit
  constructor() {
    // Automatically synchronizes form signals whenever the task input changes
    effect(() => {
      const currentTask = this.task();

      if (currentTask && this.taskId() !== currentTask.id) {
        this.taskId.set(currentTask.id);
        this.taskTitle.set(currentTask.title ?? '');
        this.taskDescription.set(currentTask.description ?? '');

        this.taskDueDate.set(currentTask.dueDate ? new Date(currentTask.dueDate) : null);

        this.taskPriority.set(
          this.priorityDropdownOptions.find((option) => option.id === currentTask.priority) ?? null,
        );
      }
    });
  }

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

  onPrioritySelect(option: DropdownOption | null) {
    // if (!option) {
    //   this.taskPriority.set(Priority.Low);
    //   return;
    // }
    // if (option?.id === Priority.High) this.taskPriority.set(Priority.High);
    // else if (option?.id === Priority.Medium) this.taskPriority.set(Priority.Medium);
    // else this.taskPriority.set(Priority.Low);

    console.log('Priority selected:', option);
    this.taskPriority.set(option);
  }

  onSubmit(event: Event) {
    // Prevent default browser refresh
    event.preventDefault();

    if (!this.taskTitle()) {
      return;
    }

    // Get values from inputs depending on the mode
    if (this.mode() === 'edit') {
      const taskToUpdate: Task = {
        id: this.task()!.id,
        title: this.taskTitle().trim(),
        description: this.taskDescription().trim(),
        dueDate: this.taskDueDate() ?? undefined,
        priority: this.taskPriority()?.id as Priority,
      };

      // Save the task via a service call
      this.tasksService.updateTask(taskToUpdate);

      console.log('Task updated!');
    } else {
      const taskToSave: Task = {
        id: crypto.randomUUID(),
        title: this.taskTitle().trim(),
        description: this.taskDescription().trim(),
        dueDate: this.taskDueDate() ?? new Date(),
        priority: (this.taskPriority()?.id as Priority) ?? Priority.Low,
      };

      this.tasksService.saveTask(taskToSave);
    }

    this.clearState();

    this.closed.emit();
  }

  clearState() {
    this.taskTitle.set('');
    this.taskDescription.set('');
    this.taskPriority.set(null);
    this.taskDueDate.set(null);
  }

  onCancelClick() {
    this.isConfirmDialogOpen.set(true);
    // this.closed.emit();
  }

  // Cancel button
  onDiscardClick() {
    this.isConfirmDialogOpen.set(false);
  }

  // Delete button
  onConfirmClick() {
    this.isConfirmDialogOpen.set(false);
    this.tasksService.deleteTask(this.task()!.id);
  }
}
