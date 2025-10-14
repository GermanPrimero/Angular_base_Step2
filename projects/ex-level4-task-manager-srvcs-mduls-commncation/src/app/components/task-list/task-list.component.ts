import { AfterViewInit, Component, Input, QueryList, ViewChild, viewChildren, ViewChildren } from '@angular/core';
import { ITask } from '../../models/task.interface';
import { TaskItemComponent } from '../task-item/task-item.component';

@Component({
  selector: 'app-task-list',
  standalone: false,
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent implements AfterViewInit {
  
  @Input() tasks: ITask[] = [];

  @ViewChildren(TaskItemComponent) taskItems!: QueryList<TaskItemComponent>

  ngAfterViewInit(): void {
    console.log("Show all tasks in Task-list-component:");
    
    this.taskItems.forEach((taskItem)=> console.log(taskItem));
    
  }
  

}
