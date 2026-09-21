import { Component } from '@angular/core';
import { signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-sidebar',
  styleUrl: './sidebar.css',
  templateUrl: './sidebar.html',
})
export class Sidebar {
  navItems = [
    { label: 'Welcome', route: '/welcome' },
    {
      label: 'My tasks',
      subItems: [
        { label: 'Active', route: '/tasks/active' },
        { label: 'Completed', route: '/tasks/completed' },
      ],
    },
    { label: 'Notes', route: '/notes' },
    { label: 'Calendar', route: '/calendar' },
  ];

  isTasksOpen = signal(false);

  toggleTasksMenu() {
    this.isTasksOpen.update((open) => !open);
  }
}
