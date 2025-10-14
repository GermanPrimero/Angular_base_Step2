import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from '../components/task-list/task-list.component';
import { TaskItemComponent } from '../components/task-item/task-item.component';
import { TaskFilterComponent } from '../components/task-filter/task-filter.component';
import { FormsModule } from '@angular/forms';
import { UnlessDirective } from '../directives/unless.directive';
import { HighlightDirective } from '../directives/highlight.directive';



@NgModule({
  declarations: [TaskListComponent, TaskItemComponent, TaskFilterComponent, UnlessDirective, HighlightDirective],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [TaskListComponent, TaskFilterComponent, UnlessDirective]
})
export class TasksModule { }
