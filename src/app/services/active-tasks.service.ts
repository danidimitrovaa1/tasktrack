import { Injectable, signal, input, output, computed } from '@angular/core';
import { Priority, Task } from '../models/task.model';
import { filter } from 'rxjs';

const DUMMY_DATA_TASKS: Task[] = [
  {
    title: 'Complete Social Strategy',
    dueDate: '2026-09-28',
    priority: Priority.Low,
  },
  {
    title: 'Finish Angular project',
    dueDate: '2026-09-25',
    priority: Priority.High,
  },
  {
    title: 'Reply to emails',
    dueDate: '2026-09-23',
    priority: Priority.Medium,
  },
  {
    title: 'Update portfolio',
    dueDate: '2026-10-02',
    priority: Priority.High,
  },
];

@Injectable({
  providedIn: 'root',
})
export class ActiveTasksService {
  // Filtering
  searchQuery = signal('');

  readonly filteredTasks = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();
    // TODO: make a signal later
    let filteredList = DUMMY_DATA_TASKS;

    if (query) {
      filteredList = filteredList.filter((task) => {
        task.title.toLowerCase().includes(query);
      });
    }
  });
}
