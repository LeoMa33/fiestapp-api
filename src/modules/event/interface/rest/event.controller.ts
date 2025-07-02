import { Controller } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Event } from '../../domain/event.entity';
import { EventService } from '../../application/event.service';
import { BaseController } from '../../../../shared/base/base.controller';
import { CreateEventDto } from './dto/create-event.dto';

@ApiTags('events')
@Controller('events')
export class EventController extends BaseController<Event, CreateEventDto> {
  protected service: EventService;

  constructor(private readonly eventService: EventService) {
    super();
    this.service = eventService;
  }

  @ApiOperation({ summary: 'Récupérer tous les événements' })
  @ApiResponse({
    status: 200,
    description: 'Liste des événements',
    type: [Event],
  })
  override findAll(): Promise<Event[]> {
    return super.findAll();
  }

  @ApiOperation({ summary: 'Récupérer un événement par son ID' })
  @ApiParam({ name: 'id', description: 'GUID de l’événement' })
  @ApiResponse({ status: 200, description: 'Événement trouvé', type: Event })
  @ApiResponse({ status: 404, description: 'Événement non trouvé' })
  override findOne(id: string): Promise<Event> {
    return super.findOne(id);
  }

  @ApiOperation({ summary: 'Créer un nouvel événement' })
  @ApiResponse({ status: 201, description: 'Événement créé', type: Event })
  override create(dto: CreateEventDto): Promise<Event> {
    return super.create(dto);
  }

  @ApiOperation({ summary: 'Mettre à jour un événement existant' })
  @ApiParam({ name: 'id', description: 'GUID de l’événement à mettre à jour' })
  @ApiResponse({
    status: 200,
    description: 'Événement mis à jour',
    type: Event,
  })
  @ApiResponse({ status: 404, description: 'Événement non trouvé' })
  override update(id: string, dto: CreateEventDto): Promise<Event> {
    return super.update(id, dto);
  }

  @ApiOperation({ summary: 'Supprimer un événement' })
  @ApiParam({ name: 'id', description: 'GUID de l’événement à supprimer' })
  @ApiResponse({ status: 204, description: 'Événement supprimé' })
  override delete(id: string): Promise<void> {
    return super.delete(id);
  }
}
