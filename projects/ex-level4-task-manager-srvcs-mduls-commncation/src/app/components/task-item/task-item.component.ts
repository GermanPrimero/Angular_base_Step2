import { Component, Input } from '@angular/core';
import { ITask } from '../../models/task.interface';

@Component({
  selector: 'app-task-item',
  standalone: false,
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.scss'
})
export class TaskItemComponent {
  @Input() task! : ITask

}
