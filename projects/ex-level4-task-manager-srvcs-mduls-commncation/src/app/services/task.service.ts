import { Injectable } from '@angular/core';
import { ITask } from '../models/task.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks: ITask[] = [];

  private behaviourSubject!: BehaviorSubject<ITask[]>;

  private currentFilter: string = "";

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

    this.behaviourSubject = new BehaviorSubject<ITask[]>(this.tasks);
  }

  getBehaviourSubjectAsObv(): Observable<ITask[]> {
    return this.behaviourSubject.asObservable();
  }

  filterTasksByCategory(name: string) {
    if (name == '') {
      this.behaviourSubject.next(this.tasks);
    } else {
      this.behaviourSubject.next(
        this.tasks.filter((task) => {
          if (task.category.toLowerCase() == name.toLowerCase() || task.category.toLowerCase().includes(name.toLowerCase())) {
            return true;
          } else {
            return false;
          }
        })
      );
    }
  }

  editStateOfTask(idTaskToModify: number) {
    this.behaviourSubject.next(this.tasks.map((task)=>{
      if(task.id == idTaskToModify) {

        task.state = true;
      }

      return task;
    }))

    this.filterTasksByCategory(this.currentFilter);
  }

  showPendingTasks() {
    this.behaviourSubject.next(this.tasks.filter((task) => !task.state))
  }

  showAllTasks(){
    this.behaviourSubject.next(this.tasks);
  }

  setCurrentFilter(filter: string) {
    this.currentFilter = filter;
  }

  getCurrentFilter() {
    return this.currentFilter;
  }
}
