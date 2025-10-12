import { Injectable } from '@angular/core';
import { ITask } from '../models/task.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks: ITask[] = [];

  constructor() {
    this.tasks = [
      {
        id: 1,
        name: 'Setup Angular project',
        description: 'Initialize workspace and install dependencies',
        state: true,
        category: 'Development',
      },
      {
        id: 2,
        name: 'Create components',
        description: 'Generate and structure main UI components',
        state: false,
        category: 'Frontend',
      },
      {
        id: 3,
        name: 'Implement service layer',
        description: 'Add services for data management and API calls',
        state: false,
        category: 'Backend',
      },
      {
        id: 4,
        name: 'Add routing',
        description: 'Configure navigation between main views',
        state: true,
        category: 'Architecture',
      },
      {
        id: 5,
        name: 'Write unit tests',
        description: 'Add Jasmine/Karma tests for core components',
        state: false,
        category: 'Testing',
      },
    ];
  }

  // getTasks(): Observable<ITask[]> {

  // }


}
