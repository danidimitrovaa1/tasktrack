import { computed, inject, Injectable, signal } from '@angular/core';
import { Task } from '../models/task.model';
import { LocalStorageService } from './local-storage.service';

@Injectable({ providedIn: 'root' })
export class TasksService {
  // TasksService owns the reactive state
  localStorageService = inject(LocalStorageService);

  // In-memory signal that holds all the tasks in one array
  readonly tasks = signal<Task[]>(this.localStorageService.getTasksFromLocalStorage());

  //   readonly activeTasks = computed(() => this.tasks().filter((task) => !task.isCompleted));
  //   readonly completedTasks = computed(() => this.tasks().filter((task) => task.isCompleted));

  // All methods that I’d need for operating on tasks:

  saveTask(newTask: Task) {
    this.tasks.update((currentTasks) => [newTask, ...currentTasks]);
    this.localStorageService.saveTasksToLocalStorage(this.tasks());
  }

  updateTask() {}

  deleteTask() {}

  markTaskComplete() {}
}
