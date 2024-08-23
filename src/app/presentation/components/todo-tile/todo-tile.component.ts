import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../../core/domain/entities/todo';

@Component({
  selector: 'todo-tile',
  templateUrl: './todo-tile.component.html',
  styleUrls: ['./todo-tile.component.scss'],
})
export class TodoTileComponent {
  @Input() i?: number;
  @Input() todo?: Todo;

  @Output() onDeleteClicked = new EventEmitter<number>();
  @Output() onUpdateClicked = new EventEmitter<{
    index: number;
    isCompleted: boolean;
  }>();

  sendOnDelete(index: number) {
    this.onDeleteClicked.emit(index);
  }

  sendOnUpdate(index: number, isCompleted: boolean) {
    this.onUpdateClicked.emit({ index, isCompleted });
  }
}
