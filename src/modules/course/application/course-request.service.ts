import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from '../../../shared/base/base.service';
import { CourseRequest } from '../domain/course-request.entity';
import { CreateRequestDto } from '../interface/rest/dto/create-request.dto';

@Injectable()
export class CourseRequestService extends BaseService<
  CourseRequest,
  CreateRequestDto
> {
  constructor(
    @InjectRepository(CourseRequest)
    private readonly courseRequestRepo: Repository<CourseRequest>,
  ) {
    super(courseRequestRepo);
  }

  protected mapCreateDtoToEntity(dto: CreateRequestDto) {
    return {
      user: { guid: dto.user },
      course: { guid: dto.course },
    };
  }

  protected mapUpdateDtoToEntity(dto: CreateRequestDto) {
    return {
      user: { guid: dto.user },
      course: { guid: dto.course },
    };
  }

  // Méthodes personnalisées ici (acceptation/refus, filtrage, etc.)
}
