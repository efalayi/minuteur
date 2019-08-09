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

  constructor() {}

  startTask(): void {
    this.removeSelectClass();
    this.startedTask.emit(this.task);
    this.addSelectClass();
  }

  removeSelectClass() {
    const taskDomElements = document.querySelectorAll('.task');
    taskDomElements.forEach((element) => {
      element.classList.remove('selected');
    });
  }

  addSelectClass() {
    const taskDomElements = document.querySelectorAll('.task');
    taskDomElements.forEach((element) => {
      const taskName = element.children[0].children[0].textContent;
      if (taskName === this.task.name) {
        element.classList.add('selected')
      }
    });
  }
}
