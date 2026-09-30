import { Component, computed, input, output, signal } from '@angular/core';
import { Task } from '../../../models/task.model';
import { Icons } from '../../icons/icons';
import { PRIORITY_DROPDOWN_OPTIONS } from '../../../shared/constants/priority.constants';
import { DatePipe } from '@angular/common';

@Component({
  imports: [Icons, DatePipe],
  selector: 'task-card-view',
  styleUrl: './task-card-view.css',
  templateUrl: './task-card-view.html',
})
export class TaskCardView {
  task = input.required<Task | null>();

  toggleEdit = output<boolean>();

  activePriority = computed(() => {
    const currentPriority = this.task()?.priority; // Priority.Low | Priority.Medium | Priority.High | "Priority"

    return PRIORITY_DROPDOWN_OPTIONS.find((option) => option.id === currentPriority);
  });

  activePriorityStyles = computed(
    () =>
      this.activePriority()?.selectedStylesClass ??
      'w-fit text-left cursor-pointer text-gray-500 font-medium',
  );

  activePriorityIconStyles = computed(
    () =>
      this.activePriority()?.iconStylesClass ??
      'w-fit text-left cursor-pointer text-gray-500 font-medium',
  );

  onCardClick() {
    this.toggleEdit.emit(true);
  }
}
