import { Field, InputType, Int, PartialType } from '@nestjs/graphql';
import { CreateTodoInput } from './create-todo.input';
import { IsNumber, IsPositive, IsNotEmpty } from 'class-validator';

@InputType()
export class UpdateTodoInput extends PartialType(CreateTodoInput) {
  @Field(() => Int)
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  id: number;
}
