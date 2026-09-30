import { Injectable, signal } from '@angular/core';
import { Task } from '../models/task.model';

const TASKS_KEY = 'tasktrack_tasks';

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
  // get all tasks
  getTasksFromLocalStorage(): Task[] {
    const tasks = JSON.parse(localStorage.getItem(TASKS_KEY) ?? '[]');
    return tasks;
  }

  // update with new/edited tasks
  saveTasksToLocalStorage(tasks: Task[]): void {
    localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
  }
}
