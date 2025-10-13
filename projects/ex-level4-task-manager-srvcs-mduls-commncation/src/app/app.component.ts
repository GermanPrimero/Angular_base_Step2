import { Component, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskService } from './services/task.service';
import { Observable, Subscription } from 'rxjs';
import { ITask } from './models/task.interface';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnDestroy {
  title = 'exLevel4-task-manager-srvcs-mduls-commncation';
  public behaviourSubject$!: Observable<ITask[]>;
  tasks: ITask[] = []
  private subscription!: Subscription;

  constructor(private taskService: TaskService) {

    this.behaviourSubject$ = taskService.getBehaviourSubjectAsObv();

    this.subscription = this.behaviourSubject$.subscribe((value:ITask[]) => {
      this.tasks = value;
      console.log(this.tasks);
      
    })

  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getNameCategory(name: string) {
    this.filterTasksByCategory(name);
  }

  filterTasksByCategory(name: string) {
    this.taskService.filterTasksByCategory(name);
  }


}
