import { Component, input, inject } from '@angular/core';
import { Icons } from '../icons/icons';
import { ActiveTasksService } from '../../services/active-tasks.service';

@Component({
  imports: [Icons],
  selector: 'app-search-bar',
  styleUrl: './search-bar.css',
  templateUrl: './search-bar.html',
})
export class SearchBar {
  searchBarPlaceholder = input<string>();

  private activeTasksService = inject(ActiveTasksService);

  setSearchQuery(userInput: string) {
    this.activeTasksService.searchQuery.set(userInput);
  }
}
