import { Component, inject } from '@angular/core';
import { Task } from '../../task.model';
import { DatePipe } from '@angular/common';
import { TaskService } from '../../task.service';
import { TaskFormComponent } from '../task-form/task-form.component';

const emptyTask = {
  name:'',
  description: '',
  dueDate: "",
  completed: false,
  project: 0,
  id: 0
}

@Component({
  selector: 'app-task-list',
  imports: [DatePipe,TaskFormComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {

  tasks: Task[];
  showModal = false;
  selectedTask: Task = emptyTask;
  formType: "CREATE" | "UPDATE" = "CREATE";

  private taskService : TaskService = inject(TaskService);
  constructor(){
    this.tasks = this.taskService.getTasks();
  }
  handleCheckbox(id: number){
    const taskIndex = this.tasks.findIndex(task=> task.id===id);
    const updatedTask = this.tasks[taskIndex];
    updatedTask.completed = !updatedTask.completed;
    this.tasks=this.taskService.updateTask(updatedTask);
  }

  deleteTask(id: number){
    this.tasks=this.taskService.deleteTask(id);
  }

  updateTask(task: Task){
    //set the selecte task
    this.selectedTask = task;
    //set Form Type
    this.formType="UPDATE";

    //show modal
    this.showModal=true;
  }
}
