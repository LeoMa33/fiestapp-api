import { Body, Delete, Get, Param, Post, Put } from '@nestjs/common';

export abstract class BaseController<T> {
  protected abstract service: {
    findAll(): Promise<T[]>;
    findOne(id: string): Promise<T>;
    create(dto: any): Promise<T>;
    update(id: string, dto: any): Promise<T>;
    delete(id: string): Promise<void>;
  };

  @Get()
  async findAll(): Promise<T[]> {
    return this.service.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<T> {
    return this.service.findOne(id);
  }

  @Post()
  async create(@Body() dto: any): Promise<T> {
    return this.service.create(dto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() dto: any): Promise<T> {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.service.delete(id);
  }
}
