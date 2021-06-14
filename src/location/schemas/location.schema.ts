import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LocationDocument = Location & Document;

interface Coordinate {
  lat: number;
  lng: number;
}
@Schema()
export class Location {
  id: string

  @Prop({ required: true })
  alias: string

  @Prop({ required: true })
  address: string

  @Prop({ required: true })
  coordinates: Coordinate

  createdAt: Date

  updatedAt: Date
}

export const LocationSchema = SchemaFactory.createForClass(Location);
