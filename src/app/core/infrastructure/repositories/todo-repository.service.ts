import { Injectable } from '@angular/core';
import { Todo } from '../../domain/entities/todo';
import { ITodoRepository } from '../../domain/interfaces/todo-repository.interface';
import { TodoApi } from '../api/todo.api';

@Injectable({
  providedIn: 'root',
})
export class TodoRepositoryService implements ITodoRepository {
  constructor(private todoApi: TodoApi) {}

  create(title: string): Promise<void> {
    return this.todoApi.create(title);
  }
  read(): Promise<Todo[]> {
    return this.todoApi.read();
  }
  update(id: number, isCompleted: boolean): Promise<void> {
    return this.todoApi.update(id, isCompleted);
  }
  delete(id: number): Promise<void> {
    return this.todoApi.delete(id);
  }
}
