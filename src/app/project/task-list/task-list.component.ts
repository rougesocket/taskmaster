import { Component } from '@angular/core';
import { Task } from '../../task.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task-list',
  imports: [DatePipe],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {

  tasks: Task[] = [{
  id: 1,
  name: "Design wireframe",
  description: "",
  completed: false,
  dueDate: new Date("2023-07-31"),
  project: 1

},{
  id: 2,
  name: "Design frontend",
  description: "",
  completed: true,
  dueDate: new Date("2023-06-15"),
  project: 1

},{
  id: 3,
  name: "Implement Backend",
  description: "",
  completed: false,
  dueDate: new Date("2023-03-31"),
  project: 1

}];

  handleCheckbox(id: number){
    const taskIndex = this.tasks.findIndex(task=> task.id===id);
    this.tasks[taskIndex].completed=!this.tasks[taskIndex].completed;
  }
}
