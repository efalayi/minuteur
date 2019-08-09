import { Component, Input } from '@angular/core';
import { Task } from '../../models/task';

@Component({
  selector: 'timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent {
  @Input()  currentTask: Task;

  timerId = 0;
  minutes = 25;
  seconds = 60;
  isPaused = false;
  startButtonText = 'start';
  title = this.currentTask;

  constructor() {}

  private clearTimer(): void {
    clearInterval(this.timerId);
  }

  private countDown(): void {
    if (this.seconds === 60) {
      this.minutes = this.minutes - 1;
      this.seconds = this.seconds - 1;
    }

    this.clearTimer()
    this.timerId = window.setInterval(() => {
      this.seconds -= 1;

      if (this.seconds === 0) {
        this.minutes = this.minutes - 1;
      } else {
        if (this.seconds < 0) {
          this.seconds = 60;
        }
      }

      if (this.minutes === 0 && this.seconds === 0) {
        this.clearTimer();
      }
    }, 1000);
  }

  initiateCountDown(): void {
    this.startButtonText = 'pause'
    this.countDown()
  }

  stopTimer(): void {
    this.startButtonText = 'start'
    this.clearTimer()
    this.minutes = 25;
    this.seconds = 60;
  }
}
