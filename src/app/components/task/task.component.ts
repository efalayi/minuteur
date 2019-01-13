import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../models/task'

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  @Input() task: Task;
  @Output() startedTask: EventEmitter<object> = new EventEmitter<object>(); 
  constructor() {

  }

  startTask(): void {
    this.startedTask.emit(this.task)
  }
}
