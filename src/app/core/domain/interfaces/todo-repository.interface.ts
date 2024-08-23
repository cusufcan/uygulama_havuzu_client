import { InjectionToken } from '@angular/core';
import { Todo } from '../entities/todo';

export const TODO_REPOSITORY_TOKEN = new InjectionToken<ITodoRepository>(
  'TodoRepository'
);

export interface ITodoRepository {
  create(title: string): Promise<void>;
  read(): Promise<Todo[]>;
  update(id: number, isCompleted: boolean): Promise<void>;
  delete(id: number): Promise<void>;
}
