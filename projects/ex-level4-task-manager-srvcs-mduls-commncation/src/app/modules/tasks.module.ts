import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from '../components/task-list/task-list.component';
import { TaskItemComponent } from '../components/task-item/task-item.component';
import { TaskFilterComponent } from '../components/task-filter/task-filter.component';



@NgModule({
  declarations: [TaskListComponent, TaskItemComponent, TaskFilterComponent],
  imports: [
    CommonModule
  ],
  exports: [TaskListComponent, TaskFilterComponent]
})
export class TasksModule { }
