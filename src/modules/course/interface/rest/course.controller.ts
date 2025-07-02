import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

import { Course } from '../../domain/course.entity';
import { CourseService } from '../../application/course.service';
import { CreateCourseDto } from './dto/create-course.dto';

@ApiTags('courses')
@Controller('courses')
export class CourseController {
  constructor(private readonly service: CourseService) {}

  @Get()
  @ApiOperation({ summary: 'Récupérer toutes les courses' })
  @ApiResponse({ status: 200, type: [Course] })
  findAll(): Promise<Course[]> {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Récupérer une course par ID' })
  @ApiParam({ name: 'id', description: 'ID de la course (UUID)' })
  @ApiResponse({ status: 200, type: Course })
  findOne(@Param('id') id: string): Promise<Course> {
    return this.service.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Créer une nouvelle course' })
  @ApiResponse({ status: 201, type: Course })
  create(@Body() dto: CreateCourseDto): Promise<Course> {
    return this.service.create(dto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Mettre à jour une course' })
  @ApiParam({ name: 'id', description: 'ID de la course (UUID)' })
  @ApiResponse({ status: 200, type: Course })
  update(
    @Param('id') id: string,
    @Body() dto: CreateCourseDto,
  ): Promise<Course> {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Supprimer une course' })
  @ApiParam({ name: 'id', description: 'ID de la course (UUID)' })
  @ApiResponse({ status: 204, description: 'Course supprimée' })
  delete(@Param('id') id: string): Promise<void> {
    return this.service.delete(id);
  }
}
