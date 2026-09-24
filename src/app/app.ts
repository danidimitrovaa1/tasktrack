import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from './components/layout/sidebar/sidebar';
import { ActiveTasksService } from './services/active-tasks.service';

@Component({
  imports: [RouterOutlet, Sidebar],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('tasktrack');
}
