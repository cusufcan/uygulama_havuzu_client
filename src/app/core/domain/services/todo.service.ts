import { Inject, Injectable } from '@angular/core';
import { Todo } from '../entities/todo';
import {
  ITodoRepository,
  TODO_REPOSITORY_TOKEN,
} from '../interfaces/todo-repository.interface';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(
    @Inject(TODO_REPOSITORY_TOKEN)
    private readonly todoRepository: ITodoRepository
  ) {}

  create(title: string): Promise<void> {
    return this.todoRepository.create(title);
  }

  read(): Promise<Todo[]> {
    return this.todoRepository.read();
  }

  update(id: number, isCompleted: boolean): Promise<void> {
    return this.todoRepository.update(id, isCompleted);
  }

  delete(id: number): Promise<void> {
    return this.todoRepository.delete(id);
  }
}
