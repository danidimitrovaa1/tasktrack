export enum Priority {
  Low = 'Low priority',
  Medium = 'Medium priority',
  High = 'High priority',
}

export interface Task {
  id: string;
  title: string;
  description?: string;
  dueDate?: Date | null;
  priority?: Priority;
}
