import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateLocationDto } from './dto/create-location.dto';
import { Location, LocationDocument } from './schemas/location.schema';

@Injectable()
export class LocationService {
  constructor(
    @InjectModel(Location.name) private readonly model: Model<LocationDocument>,
  ) {}

  async findAll(): Promise<Location[]> {
    return await this.model.find().exec();
  }

  async findOne(id: string): Promise<Location> {
    return await this.model.findById(id).exec();
  }

  async create(createLocationDto: CreateLocationDto): Promise<Location> {
    return await new this.model({
      ...createLocationDto,
      createdAt: new Date(),
    }).save();
  }

  async delete(id: string): Promise<Location> {
    return await this.model.findByIdAndDelete(id).exec();
  }

  // async deleteMany(list: Array<string>): Promise<string> {
  //   try {
  //     for (const element of list) {
  //       this.delete(element);
  //     }
  //     return 'Ok';
  //   } catch {
  //     return 'Error inesperado.';
  //   }
  // }

  // async deleteMany(list: Array<string>): Promise<object> {
  //   const ObjectId = Mongodb.ObjectID;
  //   const newList = [];
  //   list.forEach((element) => {
  //     newList.push(new ObjectId(element));
  //   });
  //   return await this.model.deleteMany({ _id: { $in: list } }).exec();
  // }
}
