import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from '../../../shared/base/base.service';
import { Course } from '../domain/course.entity';
import { CreateCourseDto } from '../interface/rest/dto/create-course.dto';
import { User } from '../../user/domain/user.entity';
import { Event } from '../../event/domain/event.entity';

@Injectable()
export class CourseService extends BaseService<Course, CreateCourseDto> {
  constructor(
    @InjectRepository(Course)
    private readonly courseRepo: Repository<Course>,
  ) {
    super(courseRepo);
  }

  protected mapCreateDtoToEntity(dto: CreateCourseDto) {
    return {
      seats: dto.seats,
      driver: { guid: dto.driver } as User,
      event: { guid: dto.event } as Event,
    };
  }

  protected mapUpdateDtoToEntity(dto: CreateCourseDto) {
    return {
      seats: dto.seats,
      driver: { guid: dto.driver } as User,
      event: { guid: dto.event } as Event,
    };
  }
}
