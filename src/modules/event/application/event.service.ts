import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Event } from '../domain/event.entity';
import { BaseService } from '../../../shared/base/base.service';
import { CreateEventDto } from '../interface/rest/dto/create-event.dto';

@Injectable()
export class EventService extends BaseService<Event, CreateEventDto> {
  constructor(
    @InjectRepository(Event)
    private readonly repo: Repository<Event>,
  ) {
    super(repo);
  }

  protected mapCreateDtoToEntity(dto: CreateEventDto) {
    return {
      title: dto.title,
      location: dto.location,
      latitude: dto.latitude,
      longitude: dto.longitude,
      date: dto.date,
      organizer: { guid: dto.organizer },
    };
  }

  protected mapUpdateDtoToEntity(dto: CreateEventDto) {
    return {
      title: dto.title,
      location: dto.location,
      latitude: dto.latitude,
      longitude: dto.longitude,
      date: dto.date,
      organizer: { guid: dto.organizer },
    };
  }
}
