import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-task-filter',
  standalone: false,
  templateUrl: './task-filter.component.html',
  styleUrl: './task-filter.component.scss'
})
export class TaskFilterComponent implements OnInit {

  @Output() nameCategory: EventEmitter<string> = new EventEmitter<string>();
  nameEntered! : string;

  ngOnInit(): void {
      this.nameEntered = "";
  }

  filterByCategory() {
    this.nameCategory.emit(this.nameEntered)
  }

}
