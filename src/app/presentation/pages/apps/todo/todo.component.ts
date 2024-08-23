import { Component } from '@angular/core';
import { Todo } from '../../../../core/domain/entities/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent {
  todos: Todo[] = [
    new Todo(1, 'Buy milk', false),
    new Todo(2, 'Buy bread', false),
    new Todo(3, 'Buy butter', false),
  ];

  inputValue: string = '';

  addTodo() {
    var newTodo = new Todo(this.todos.length, this.inputValue, false);
    if (newTodo.title.trim()) {
      this.todos.push(newTodo);
      this.inputValue = '';
    }
  }

  completeTodo(index: number) {
    // Implement completion logic if needed
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
  }
}
