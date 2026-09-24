import { Component } from '@angular/core';
import { Margins } from '../../components/layout/margins/margins';
import { PageHeader } from '../../components/layout/page-header/page-header';
import { SearchBar } from '../../components/search-bar/search-bar';

@Component({
  imports: [Margins, PageHeader, SearchBar],
  selector: 'app-completed-tasks',
  styleUrl: './completed-tasks.css',
  templateUrl: './completed-tasks.html',
})
export class CompletedTasks {
  title = 'Completed tasks';
  searchBarPlaceholder = 'completed tasks';
}
