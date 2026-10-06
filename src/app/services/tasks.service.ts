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

  private persistTaskList(updatedTasks: Task[]) {
    this.tasks.set(updatedTasks);
    this.localStorageService.saveTasksToLocalStorage(updatedTasks);
  }

  saveTask(taskToSave: Task) {
    const updatedTasks = [taskToSave, ...this.tasks()];
    this.persistTaskList(updatedTasks);
  }

  updateTask(taskToUpdate: Task) {
    const updatedTasks = this.tasks().map((task) =>
      task.id === taskToUpdate.id ? taskToUpdate : task,
    );
    this.persistTaskList(updatedTasks);
  }

  deleteTask(taskIdToDelete: string) {
    const updatedTasks = this.tasks().filter((task) => task.id !== taskIdToDelete);
    this.persistTaskList(updatedTasks);
  }

  markTaskComplete() {}
}
