import { Component, Input } from '@angular/core';
import { ITask } from '../../models/task.interface';

@Component({
  selector: 'app-task-list',
  standalone: false,
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {
  @Input() tasks: ITask[] = [];

  

}
