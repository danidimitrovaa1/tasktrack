import { Component, computed, input, model, OnInit, output, signal } from '@angular/core';
import { Priority, Task } from '../../models/task.model';
import { TaskCardForm } from './task-card-form/task-card-form';
import { TaskCardView } from './task-card-view/task-card-view';

@Component({
  imports: [TaskCardForm, TaskCardView],
  selector: 'app-task-card',
  styleUrl: './task-card.css',
  templateUrl: './task-card.html',
})
export class TaskCard implements OnInit {
  task = input<Task | null>(null);

  closed = output<void>();

  // for active-tasks
  isCreating = input<boolean>(false);

  isEditing = signal(false);

  ngOnInit(): void {
    this.isEditing.set(!this.task());
  }

  toggleEdit(editing: boolean) {
    this.isEditing.update((previous) => !previous);
  }

  handleClose() {
    this.isEditing.set(false);
    this.closed.emit();
  }
}
