export interface Task {
    id: number;
    name: string;
    description: string;
    completed: boolean;
    dueDate: Date | string;
    project: number;
}

