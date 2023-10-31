import { Component, Input } from '@angular/core';
import { Task } from '../task.model';

@Component({
  selector: 'task-component',
  templateUrl: './task-component.component.html'
})
export class TaskComponent {
  @Input() task! : Task;
}