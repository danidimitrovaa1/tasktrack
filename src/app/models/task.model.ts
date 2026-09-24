export enum Priority {
  Low = 'Low priority',
  Medium = 'Medium priority',
  High = 'High priority',
}

export interface Task {
  title: string;
  dueDate: string;
  priority: Priority;
}
