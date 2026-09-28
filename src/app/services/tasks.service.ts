import { computed, inject, Injectable, signal } from '@angular/core';
import { Task } from '../models/task.model';
import { LocalStorageService } from './local-storage';

// Test data
// const DUMMY_DATA_TASKS: Task[] = [
//   {
//     id: crypto.randomUUID(),
//     title: 'Complete Social Strategy',
//     description: 'Draft content calendars and outline target campaign metrics for Q4.',
//     dueDate: '2026-09-28',
//     priority: Priority.Low,
//   },
//   {
//     id: crypto.randomUUID(),
//     title: 'Finish Angular project',
//     description: 'Refactor task modal with Signals, custom dropdowns, and multi-line inputs.',
//     dueDate: '2026-09-25',
//     priority: Priority.High,
//   },
//   {
//     id: crypto.randomUUID(),
//     title: 'Reply to emails',
//     description: 'Clear inbox backlog and respond to pending client inquiries.',
//     dueDate: '2026-09-23',
//     priority: Priority.Medium,
//   },
//   {
//     id: crypto.randomUUID(),
//     title: 'Update portfolio',
//     description: 'Add recent project case studies and showcase updated frontend skillsets.',
//     dueDate: '2026-10-02',
//     priority: Priority.High,
//   },
// ];

@Injectable({ providedIn: 'root' })
export class TasksService {
  // TasksService owns the reactive state
  localStorageService = inject(LocalStorageService);

  // In-memory signal that holds all the tasks in one array
  readonly tasks = signal<Task[]>(this.localStorageService.getTasksFromLocalStorage());

  //   readonly activeTasks = computed(() => this.tasks().filter((task) => !task.isCompleted));
  //   readonly completedTasks = computed(() => this.tasks().filter((task) => task.isCompleted));

  // All methods that I’d need for operating on tasks:

  createTask(newTask: Task) {
    this.tasks.update((currentTasks) => [newTask, ...currentTasks]);
    this.localStorageService.saveTasksToLocalStorage(this.tasks());
  }

  updateTask() {}

  deleteTask() {}

  markTaskComplete() {}
}
