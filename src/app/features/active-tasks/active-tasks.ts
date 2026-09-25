import { Component, ElementRef, inject, OnInit, signal, ViewChild } from '@angular/core';
import { Margins } from '../../components/layout/margins/margins';
import { PageHeader } from '../../components/layout/page-header/page-header';
import { SearchBar } from '../../components/search-bar/search-bar';
import { Icons } from '../../components/icons/icons';
import { TaskCard } from '../../components/task-card/task-card';
import { TasksService } from '../../services/tasks.service';

@Component({
  imports: [Margins, PageHeader, SearchBar, Icons, TaskCard],
  selector: 'app-active-tasks',
  styleUrl: './active-tasks.css',
  templateUrl: './active-tasks.html',
})
export class ActiveTasks implements OnInit {
  tasksService = inject(TasksService);

  title = 'My tasks';
  searchBarPlaceholder = 'tasks';

  isModalOpen = signal(false);

  ngOnInit(): void {
    this.getAllTasks();
  }

  openModal() {
    this.isModalOpen.set(true);
  }

  closeModal() {
    this.isModalOpen.set(false);
  }

  getAllTasks() {
    const tasks = this.tasksService.getAllTasks();
    console.log(tasks);
  }
}
