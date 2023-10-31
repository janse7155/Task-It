import { Component } from '@angular/core';
import { Task } from '../task.model';

@Component({
  selector: 'task-list-component',
  templateUrl: './task-list-component.component.html'
})
export class TaskListComponent {
  tasks: Task[] = [];
  newTaskDescription = '';

  addTask() {
    if (this.newTaskDescription) {
      this.tasks.push(new Task(this.newTaskDescription));
      this.newTaskDescription = '';
    }
  }

  
}