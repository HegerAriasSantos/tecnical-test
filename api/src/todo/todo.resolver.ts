import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { TodoService } from './todo.service';
import { Todo } from './entity/todo.entity';

import { CreateTodoInput } from './dto';

@Resolver(() => Todo)
export class TodoResolver {
  constructor(private readonly todoService: TodoService) {}

  @Query(() => [Todo], { name: 'procedures' })
  findAll(): Todo[] {
    return this.todoService.findAll();
  }

  @Mutation(() => [Todo], { name: 'replaceAllProcedures' })
  replaceAllProcedures(
    @Args({ name: 'CreateTodoInput', type: () => [CreateTodoInput] })
    createTodoInput: CreateTodoInput[],
  ) {
    return this.todoService.replace(createTodoInput);
  }
}
