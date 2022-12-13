import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CarsModule } from './cars/cars.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    CarsModule,
    MongooseModule.forRoot(process.env.MONGO_CONNECTION_STRING),
  ],
})
export class AppModule {}
