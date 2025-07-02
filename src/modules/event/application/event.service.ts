import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Event } from '../domain/event.entity';
import { BaseService } from '../../../shared/base/base.service';

@Injectable()
export class EventService extends BaseService<Event> {
    constructor(
        @InjectRepository(Event)
        repo: Repository<Event>,
    ) {
        super(repo);
    }
}
