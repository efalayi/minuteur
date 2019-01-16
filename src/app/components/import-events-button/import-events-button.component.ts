import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service'

@Component({
  selector: 'import-events-button',
  styleUrls: ['./import-events-button.component.scss'],
  templateUrl: './import-events-button.component.html'
})
export class ImportEventsButtonComponent {
  constructor(private taskService: TaskService) {}

  importEvents(): void {
    this.taskService.importCalendarEvents();
  }
}
