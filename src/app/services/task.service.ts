import { Injectable } from '@angular/core';
import { Task } from '../models/task';
import { CalendarService } from './google/calendar.service'

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  tasks: Task[] = []

  constructor(private calendarService: CalendarService) {}

  async importCalendarEvents(user: object) {
    await this.calendarService.importCalendarEvents(user);
    this.tasks = this.calendarService.events;
  }
}
