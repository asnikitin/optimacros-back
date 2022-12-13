import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CarDocument = HydratedDocument<Car>;

@Schema()
export class Car {
  @Prop()
  brand: string;

  @Prop()
  name: string;

  @Prop()
  year: number;

  @Prop()
  price: number;
}

export const CarSchema = SchemaFactory.createForClass(Car);
