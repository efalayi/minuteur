import { Injectable } from '@angular/core';
import { Task } from '../models/task';
import { CalendarService } from './google/calendar.service'

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  tasks: Task[] = []

  constructor(private calendarService: CalendarService) {}

  async importCalendarEvents() {
    await this.calendarService.importCalendarEvents();
    this.tasks = this.calendarService.events;
  }
}
