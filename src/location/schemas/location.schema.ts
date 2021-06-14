import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LocationDocument = Location & Document;

@Schema()
export class Location {
  id: string

  @Prop({ required: true })
  alias: string

  @Prop({ required: true })
  address: string

  @Prop({ required: true })
  location: [lat: number, lng: number]

  createdAt: Date;

  updatedAt: Date;
}

export const LocationSchema = SchemaFactory.createForClass(Location);
