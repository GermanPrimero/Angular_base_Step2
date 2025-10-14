import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskService } from './services/task.service';
import { Observable, Subscription } from 'rxjs';
import { ITask } from './models/task.interface';
import { TaskFilterComponent } from './components/task-filter/task-filter.component';
import { TaskListComponent } from './components/task-list/task-list.component';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnDestroy, AfterViewInit {
  title = 'exLevel4-task-manager-srvcs-mduls-commncation';
  public behaviourSubject$!: Observable<ITask[]>;
  tasks: ITask[] = [];
  private subscription!: Subscription;
  @ViewChild('filterComponent') filterComponent!: TaskFilterComponent;
  @ViewChild(TaskListComponent) taskList! : TaskListComponent;

  constructor(private taskService: TaskService) {
    this.behaviourSubject$ = taskService.getBehaviourSubjectAsObv();

    this.subscription = this.behaviourSubject$.subscribe((value: ITask[]) => {
      this.tasks = value;
      
    });
  }
  ngAfterViewInit(): void {
    setTimeout(()=>this.showTasksByFilter())
    
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getNameCategory(name: string) {
    this.filterTasksByCategory(name);
  }

  filterTasksByCategory(name: string) {
    this.taskService.filterTasksByCategory(name);
    this.showValueOfInputFilter();
    this.taskService.setCurrentFilter(this.filterComponent.getNameEntered());
  }

  showValueOfInputFilter() {
    console.log('@ViewChild ->', this.filterComponent.getNameEntered());
  }

  markAsCompletedAllTasks() {
    this.taskList.taskItems.forEach((taskItem) =>{
      taskItem.task.state = true;
    })
  }

  showTasksByFilter() {

    if(!this.filterComponent) return;

    this.taskService.filterTasksByCategory(this.filterComponent.getNameEntered())
  }
}
