import { Injectable } from '@nestjs/common';
import { CreateTodoInput } from './dto/inputs';
import { Todo } from './entity/todo.entity';

@Injectable()
export class TodoService {
  private todos: Todo[] = [];

  findAll(): Todo[] {
    return this.todos;
  }
  replace(createTodoInput: CreateTodoInput[]): Todo[] {
    this.todos = createTodoInput;
    return this.todos;
  }
}
