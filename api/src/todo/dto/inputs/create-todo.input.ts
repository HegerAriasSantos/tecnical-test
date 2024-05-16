import { Field, InputType, Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  MaxLength,
} from 'class-validator';

@InputType()
export class CreateTodoInput {
  @Field(() => Int)
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  id: number;

  @Field(() => Int)
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  process: number;

  @Field(() => Int)
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  code: number;

  @Field(() => Int)
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  reclaimed: number;

  @Field(() => Int)
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  difference: number;

  @Field(() => Int)
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  authorized: number;
}
