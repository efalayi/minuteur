import { Component } from '@angular/core';
import { TaskService } from './services/task.service'
import { Task } from './models/task'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  startedTask = {}
  title = 'Minuteur';

  constructor(public taskService: TaskService) {

  }

  onStartTask(task: Task): void {
    this.startedTask = task
  }
}
