import { NumberValueAccessor } from "@angular/forms";

export interface Task {
    id: number;
    name: string;
    description: string;
    completed: boolean;
    dueDate: Date;
    project: number;
}

