import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { AuthService } from './auth.service';
import { Task } from '../../models/task'

declare var gapi;

@Injectable({
  providedIn: 'root'
})

export class CalendarService {
  events: Task[];
  currentTime = new Date();
  constructor(private authService: AuthService) {}

  formatCalendarEvent(events: []): Task[] {
    const calendarEvents = [...events];
    const formattedEvents = calendarEvents.map((event: any) => {
      const stopTime = moment(event.end.dateTime).calendar();
      return {
        id: event.id,
        name: event.summary,
        priorityLevel: 1,
        date: stopTime
      }
    });
    return formattedEvents;
  }

  async getCalendarEvents() {
    const { result: { items: events } } = await gapi.client.calendar.events.list({
      calendarId: 'primary',
      timeMin: new Date().toISOString(),
      showDeleted: false,
      singleEvents: true,
      maxResults: 3,
      orderBy: 'startTime'
    });
    console.log('events: ', events)
    this.events = this.formatCalendarEvent(events);
  }

  async importCalendarEvents() {
    if (!this.authService.currentUser) {
      this.authService.authenticateUser();
    }
    await this.getCalendarEvents()
    // this.authService.logoutUser()
  }
}
