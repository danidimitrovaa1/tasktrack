import { Component, ElementRef, inject, signal, ViewChild } from '@angular/core';
import { Margins } from '../../components/layout/margins/margins';
import { PageHeader } from '../../components/layout/page-header/page-header';
import { SearchBar } from '../../components/search-bar/search-bar';
import { Icons } from '../../components/icons/icons';
import { ActiveTasksService } from '../../services/active-tasks.service';
import { AddTaskComponent } from './components/add-task/add-task.component';

@Component({
  imports: [Margins, PageHeader, SearchBar, Icons, AddTaskComponent],
  selector: 'app-active-tasks',
  styleUrl: './active-tasks.css',
  templateUrl: './active-tasks.html',
})
export class ActiveTasks {
  title = 'My tasks';
  searchBarPlaceholder = 'tasks';

  isModalOpen = signal(false);

  openModal() {
    this.isModalOpen.set(true);
  }

  closeModal() {
    this.isModalOpen.set(false);
  }
}
