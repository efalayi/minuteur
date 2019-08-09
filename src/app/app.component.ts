import { Component, OnInit } from '@angular/core';
import { TaskService } from './services/task.service';
import { AuthService } from './services/google/auth.service';
import { Task } from './models/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  startedTask: object = {};
  title: string = 'Minuteur';
  currentUser: object = {};

  constructor(private authService: AuthService, private taskService: TaskService) {}

  ngOnInit() {
    this.getCurrentUser();
  }

  getCurrentUser() {
    this.authService.getCurrentUser();
  }

  onStartTask(task: Task): void {
    this.startedTask = task;
  }
}
