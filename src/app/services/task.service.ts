import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  public tasks: Task[] = [
    {
      id: 'randomId1',
      name: 'Task 1',
      priorityLevel: 2,
      date: new Date()
    },
    {
      id: 'randomId2',
      name: 'Task 2',
      priorityLevel: 5,
      date: new Date()
    },
    {
      id: 'randomId3',
      name: 'Task 3',
      priorityLevel: 1,
      date: new Date()
    }
  ]
}
