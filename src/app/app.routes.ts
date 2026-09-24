import { Routes } from '@angular/router';
import { Welcome } from './features/welcome/welcome';
import { ActiveTasks } from './features/active-tasks/active-tasks';
import { CompletedTasks } from './features/completed-tasks/completed-tasks';
import { Notes } from './features/notes/notes';
import { Calendar } from './features/calendar/calendar';

export const routeConfig: Routes = [
  {
    path: '',
    component: Welcome,
    title: 'TaskTrack',
  },
  {
    path: 'welcome',
    component: Welcome,
    title: 'Welcome to TaskTrack',
  },
  {
    path: 'tasks/active',
    component: ActiveTasks,
    title: 'Tasks',
  },
  {
    path: 'tasks/completed',
    component: CompletedTasks,
    title: 'Completed Tasks',
  },
  {
    path: 'notes',
    component: Notes,
    title: 'Notes',
  },
  {
    path: 'calendar',
    component: Calendar,
    title: 'Calendar',
  },
];
