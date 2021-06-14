import { Module } from '@nestjs/common';
import { LocationService } from './location.service';
import { LocationController } from './location.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Location, LocationSchema } from './schemas/location.schema';

@Module({
  providers: [LocationService],
  controllers: [LocationController],
  imports: [
    MongooseModule.forFeature([
      { 
        name: Location.name, 
        schema: LocationSchema 
      }
    ]),
  ],
})
export class LocationModule {}
