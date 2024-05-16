import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Todo {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  process: number;

  @Field(() => Int)
  code: number;

  @Field(() => Int)
  reclaimed: number;

  @Field(() => Int)
  difference: number;

  @Field(() => Int)
  authorized: number;
}
