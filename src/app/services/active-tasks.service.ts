import { Injectable, signal, input, output, computed } from '@angular/core';
import { Priority, Task } from '../models/task.model';
import { filter } from 'rxjs';

const DUMMY_DATA_TASKS: Task[] = [
  {
    id: crypto.randomUUID(),
    title: 'Complete Social Strategy',
    description: 'Draft content calendars and outline target campaign metrics for Q4.',
    dueDate: '2026-09-28',
    priority: Priority.Low,
  },
  {
    id: crypto.randomUUID(),
    title: 'Finish Angular project',
    description: 'Refactor task modal with Signals, custom dropdowns, and multi-line inputs.',
    dueDate: '2026-09-25',
    priority: Priority.High,
  },
  {
    id: crypto.randomUUID(),
    title: 'Reply to emails',
    description: 'Clear inbox backlog and respond to pending client inquiries.',
    dueDate: '2026-09-23',
    priority: Priority.Medium,
  },
  {
    id: crypto.randomUUID(),
    title: 'Update portfolio',
    description: 'Add recent project case studies and showcase updated frontend skillsets.',
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
