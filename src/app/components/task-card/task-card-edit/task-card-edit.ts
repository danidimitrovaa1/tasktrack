import { Component, computed, inject, input, OnInit, output, signal } from '@angular/core';
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
import { clear } from 'console';

@Component({
  imports: [DropdownMenu, DueDate, BtnCreate, BtnCancel],
  selector: 'task-card-edit',
  styleUrl: './task-card-edit.css',
  templateUrl: './task-card-edit.html',
})
export class TaskCardEdit implements OnInit {
  tasksService = inject(TasksService);

  task = input<Task | null>(null);

  toggleEdit = output<boolean>();

  taskTitle = signal('');
  taskDescription = signal('');
  taskPriority = signal<Priority | 'Priority'>('Priority');
  taskDueDate = signal<Date | null>(null);

  priorityDropdownOptions = PRIORITY_DROPDOWN_OPTIONS;
  icon: IconType = 'priority';
  buttonTitle = 'Priority';
  datePickerButtonTitle = 'Due date';

  ngOnInit(): void {
    if (this.task()) {
      const title = this.task()?.title ?? '';
      const description = this.task()?.description ?? '';
      const priority = this.task()?.priority ?? 'Priority';
      const dueDate = this.taskDueDate() ?? null;

      this.taskTitle.set(title);
      this.taskDescription.set(description);
      this.taskPriority.set(priority);
      this.taskDueDate.set(dueDate);
    }
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
    if (!option) {
      this.taskPriority.set(Priority.Low);
      return;
    }

    if (option?.id === Priority.High) this.taskPriority.set(Priority.High);
    else if (option?.id === Priority.Medium) this.taskPriority.set(Priority.Medium);
    else this.taskPriority.set(Priority.Low);
  }

  onSubmit(event: Event) {
    // Prevent default browser refresh
    event.preventDefault();

    // Get values from inputs
    // Only generate an id if we're creating, otherwise, reuse the existing id
    const id = this.task()?.id ?? crypto.randomUUID();

    const title = this.taskTitle().trim();

    const description = this.taskDescription().trim();

    const dueDate =
      this.taskDueDate()?.toISOString()?.split('T')?.[0] ?? new Date().toISOString().split('T')[0];

    const priority =
      this.taskPriority() === 'Priority' ? Priority.Low : (this.taskPriority() as Priority);

    // Validate input
    if (!this.taskTitle()) {
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

    // Save the task via a service callxs
    this.tasksService.saveTask(taskToSave);

    this.clearState();
  }

  clearState() {
    this.taskTitle.set('');
    this.taskDescription.set('');
    this.taskPriority.set('Priority');
    this.taskDueDate.set(null);
  }
}
