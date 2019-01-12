import { Component, Input } from '@angular/core';
import { Task } from '../../models/task'

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  @Input() task: Task;
  constructor() {

  }

  startTask(): void {
    console.log('this task: ', this.task)
  }
}
