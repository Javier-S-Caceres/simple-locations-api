import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateLocationDto } from './dto/create-location.dto';
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

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.service.delete(id);
  }

  // @Delete('/deletemany')
  // async deleteMany(@Body() list: Array<string>) {
  //   return await this.service.deleteMany(list);
  // }
}
