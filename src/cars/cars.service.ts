import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Car, CarDocument } from './car.schema';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Injectable()
export class CarsService {
  constructor(@InjectModel(Car.name) private carModel: Model<CarDocument>) {}

  async create(createCarDto: CreateCarDto): Promise<Car> {
    const createdCar = new this.carModel(createCarDto);
    return createdCar.save();
  }

  async findAll(sort: string): Promise<Car[]> {
    return this.carModel.find().sort(sort).exec();
  }

  async findOne(id: ObjectId) {
    return this.carModel.findById({ _id: id }).exec();
  }

  async update(id: ObjectId, updateCarDto: UpdateCarDto) {
    return this.carModel.updateOne({ _id: id }, updateCarDto);
  }

  async remove(id: ObjectId) {
    return this.carModel.deleteOne({ _id: id }).exec();
  }
}
