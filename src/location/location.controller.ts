import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { LocationService } from './location.service';

@Controller('locations')
export class LocationController {
  constructor(private readonly service: LocationService) {}

  @Get()
  async index() {
    return await this.service.findAll();
  }

  @Get(':id')
  async find(@Param('id') id: string) {
    return await this.service.findOne(id);
  }

  @Post('/create')
  async create(@Body() createLocationDto: CreateLocationDto) {
    return await this.service.create(createLocationDto);
  }

  // @Put(':id')
  // async update(@Param('id') id: string, @Body() updateLocationDto: UpdateLocationDto) {
  //   return await this.service.update(id, updateLocationDto);
  // }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.service.delete(id);
  }

  @Delete('/deleteMany')
  async deleteMany(@Body() id: string) {
    return await this.service.delete(id);
  }
}
