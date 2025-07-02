import { Controller } from '@nestjs/common';
import { Event } from '../../domain/event.entity';
import { EventService } from '../../application/event.service';
import {BaseController} from "../../../../shared/base/base.controller";

@Controller('events')
export class EventController extends BaseController<Event> {
    constructor(private readonly eventService: EventService) {
        super();
        this.service = eventService;
    }

    protected service: EventService;
}
