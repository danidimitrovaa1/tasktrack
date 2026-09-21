export enum Priority {
  Low = 'low',
  Medium = 'medium',
  High = 'high',
}

export interface Task {
  title: string;
  dueDate: number;
  priority: Priority;
}
