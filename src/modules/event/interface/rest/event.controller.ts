import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import {
  ApiBody,
  ApiConsumes,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Event } from '../../domain/event.entity';
import { EventService } from '../../application/event.service';
import { BaseController } from '../../../../shared/base/base.controller';
import { CreateEventDto } from './dto/create-event.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { MinioService } from '../../../../shared/services/minio.service';

@ApiTags('events')
@Controller('events')
export class EventController extends BaseController<Event, CreateEventDto> {
  protected service: EventService;

  constructor(
    private readonly eventService: EventService,
    private readonly minioService: MinioService,
  ) {
    super();
    this.service = eventService;
  }

  @Get()
  @ApiOperation({ summary: 'Récupérer tous les événements' })
  @ApiResponse({
    status: 200,
    description: 'Liste des événements',
    type: [Event],
  })
  override findAll(): Promise<Event[]> {
    return super.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Récupérer un événement par son ID' })
  @ApiParam({ name: 'id', description: 'GUID de l’événement' })
  @ApiResponse({ status: 200, description: 'Événement trouvé', type: Event })
  @ApiResponse({ status: 404, description: 'Événement non trouvé' })
  override findOne(id: string): Promise<Event> {
    return super.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Créer un nouvel événement' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({ type: CreateEventDto })
  @ApiResponse({ status: 201, description: 'Événement créé', type: Event })
  @UseInterceptors(FileInterceptor('file'))
  async create(
    @Body() dto: CreateEventDto,
    @UploadedFile() file?: Express.Multer.File,
  ): Promise<Event> {
    const event = await this.service.create(dto);
    if (file) {
      await this.minioService.uploadEventImage(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-argument
        file.buffer,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-argument
        file.originalname,
        event.guid,
      );
    }
    return event;
  }

  @Put(':id')
  @ApiOperation({ summary: 'Mettre à jour un événement' })
  @ApiConsumes('multipart/form-data')
  @ApiParam({ name: 'id', description: 'GUID de l’événement' })
  @ApiBody({ type: CreateEventDto })
  @ApiResponse({
    status: 200,
    description: 'Événement mis à jour',
    type: Event,
  })
  @ApiResponse({ status: 404, description: 'Événement non trouvé' })
  @UseInterceptors(FileInterceptor('file'))
  async update(
    @Param('id') id: string,
    @Body() dto: CreateEventDto,
    @UploadedFile() file?: Express.Multer.File,
  ): Promise<Event> {
    const event = await this.service.update(id, dto);
    if (file) {
      await this.minioService.uploadEventImage(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-argument
        file.buffer,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-argument
        file.originalname,
        event.guid,
      );
    }
    return event;
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Supprimer un événement' })
  @ApiParam({ name: 'id', description: 'GUID de l’événement à supprimer' })
  @ApiResponse({ status: 204, description: 'Événement supprimé' })
  override delete(id: string): Promise<void> {
    return super.delete(id);
  }
}
