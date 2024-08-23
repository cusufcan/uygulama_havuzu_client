import { Component } from '@angular/core';
import { Todo } from '../../../../core/domain/entities/todo';
import { TodoService } from '../../../../core/domain/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent {
  todos: Todo[] = [];
  inputValue: string = '';

  constructor(private todoService: TodoService) {
    this.fetchTodos();
  }

  createTodo() {
    if (this.inputValue.trim()) {
      this.todoService.create(this.inputValue).then(() => {
        this.inputValue = '';
        this.fetchTodos();
      });
    }
  }

  fetchTodos() {
    this.todoService
      .read()
      .then((todos) => {
        this.todos = todos.sort((a, b) => a.id - b.id);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  updateTodo(i: number, isCompleted: boolean) {
    this.todoService
      .update(this.todos[i].id, isCompleted)
      .then(() => {
        this.fetchTodos();
      })
      .catch((error) => {
        console.error(error);
      });
  }

  deleteTodo(i: number) {
    this.todoService
      .delete(this.todos[i].id)
      .then(() => {
        this.fetchTodos();
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
