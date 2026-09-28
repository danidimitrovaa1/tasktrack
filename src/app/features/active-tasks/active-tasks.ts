import { Component, ElementRef, inject, OnInit, signal, ViewChild } from '@angular/core';
import { Margins } from '../../components/layout/margins/margins';
import { PageHeader } from '../../components/layout/page-header/page-header';
import { SearchBar } from '../../components/search-bar/search-bar';
import { Icons } from '../../components/icons/icons';
import { TaskCard } from '../../components/task-card/task-card';
import { TasksService } from '../../services/tasks.service';
import { Task } from '../../models/task.model';

@Component({
  imports: [Margins, PageHeader, SearchBar, Icons, TaskCard],
  selector: 'app-active-tasks',
  styleUrl: './active-tasks.css',
  templateUrl: './active-tasks.html',
})
export class ActiveTasks implements OnInit {
  tasksService = inject(TasksService);

  tasks = this.tasksService.tasks;

  title = 'My tasks';

  searchBarPlaceholder = 'tasks';

  isModalOpen = signal(false);

  selectedTask = signal<Task | null>(null);

  isCreating = true;

  ngOnInit(): void {
    this.getAllTasks();
  }

  getAllTasks() {
    const tasks = this.tasksService.tasks();
    console.log(tasks);
    return tasks;
  }

  openCreateModal() {
    this.isModalOpen.set(true);
    this.selectedTask.set(null);
  }

  openEditModal(task: Task) {
    this.isModalOpen.set(true);
    this.selectedTask.set(task);
  }

  closeModal() {
    this.isModalOpen.set(false);
    this.selectedTask.set(null);
  }

  onSaveTask(task: Task) {
    this.tasksService.createTask(task);
  }
}
