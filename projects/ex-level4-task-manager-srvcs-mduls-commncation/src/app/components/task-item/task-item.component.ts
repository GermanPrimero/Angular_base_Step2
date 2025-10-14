import { Component, Input, OnInit } from '@angular/core';
import { ITask } from '../../models/task.interface';
import { TaskService } from '../../services/task.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-task-item',
  standalone: false,
  // providers: [TaskService],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.scss'
})
export class TaskItemComponent {
  @Input() task! : ITask

  constructor(private taskService: TaskService) {
    
  }

  // markAsCompleted(task: ITask) {
  //   this.taskService.editStateOfTask(task.id);
  // }

  //Other way not pass parameter and use 
  //attribute @Input task
  markAsCompleted() {
    this.taskService.editStateOfTask(this.task.id);
  }

}
