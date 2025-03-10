import { Injectable } from '@angular/core';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

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
  constructor() { }

  //getTasks
  getTasks(){
    return this.tasks;
  }

  //addTask
  addTask(task : Task){
    this.tasks.push(task);
    return this.tasks;
  }

  //update Task
  updateTask(newTask : Task){
    const taskIndex = this.tasks.findIndex((task)=> task.id === newTask.id);
    this.tasks[taskIndex] = newTask;
    return this.tasks;
  }

  //delete Task
  deleteTask(id: number){
    const taskIndex = this.tasks.findIndex((task)=> task.id === id);
    this.tasks.splice(taskIndex,1);
    return this.tasks;
  }
}
