import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent {
  @Input() task: Task;

  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();

  constructor() {}
  faTimes = faTimes;
  data: any = '';

  onDelete(task: any) {
    this.onDeleteTask.emit(task);
  }
}
