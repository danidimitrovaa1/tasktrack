import { Component } from '@angular/core';
import { signal } from '@angular/core';
import { Icons } from '../../icons/icons';
import { NavItem } from '../../../models/navbar.model';
import { RouterLink } from '@angular/router';

@Component({
  imports: [Icons, RouterLink],
  selector: 'app-sidebar',
  styleUrl: './sidebar.css',
  templateUrl: './sidebar.html',
})
export class Sidebar {
  navItems: NavItem[] = [
    { icon: 'home', label: 'Welcome', route: '/welcome' },
    {
      icon: 'tasks',
      label: 'My tasks',
      subItems: [
        { icon: 'activeTask', label: 'Active', route: '/tasks/active' },
        { icon: 'checkedTask', label: 'Completed', route: '/tasks/completed' },
      ],
    },
    { icon: 'notes', label: 'Notes', route: '/notes' },
    { icon: 'calendar', label: 'Calendar', route: '/calendar' },
  ];

  isTasksOpen = signal(false);

  toggleTasksMenu() {
    this.isTasksOpen.update((open) => !open);
  }
}
