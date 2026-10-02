import { Injectable, signal, input, output, computed } from '@angular/core';
import { Priority, Task } from '../models/task.model';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ActiveTasksService {
  // Filtering
  searchQuery = signal('');

  // readonly filteredTasks = computed(() => {
  //   const query = this.searchQuery().toLowerCase().trim();
  //   // TODO: make a signal later
  //   let filteredList = DUMMY_DATA_TASKS;

  //   if (query) {
  //     filteredList = filteredList.filter((task) => {
  //       task.title.toLowerCase().includes(query);
  //     });
  //   }
  // });
}
