import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Hosting } from '../../domain/hosting.entity';
import { HostingService } from '../../application/hosting.service';
import { BaseController } from '../../../../shared/base/base.controller';
import { CreateHostingDto } from './dto/create-hosting.dto';

@ApiTags('hostings')
@Controller('hostings')
export class HostingController extends BaseController<
  Hosting,
  CreateHostingDto
> {
  protected service: HostingService;

  constructor(private readonly hostingService: HostingService) {
    super();
    this.service = hostingService;
  }

  @Get()
  @ApiOperation({ summary: 'Récupérer tous les hébergements' })
  @ApiResponse({
    status: 200,
    description: 'Liste des hébergements',
    type: [Hosting],
  })
  override findAll(): Promise<Hosting[]> {
    return super.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Récupérer un hébergement par ID' })
  @ApiParam({ name: 'id', description: 'GUID de l’hébergement' })
  @ApiResponse({
    status: 200,
    description: 'Hébergement trouvé',
    type: Hosting,
  })
  @ApiResponse({ status: 404, description: 'Hébergement non trouvé' })
  override findOne(@Param('id') id: string): Promise<Hosting> {
    return super.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Créer un nouvel hébergement' })
  @ApiBody({ type: CreateHostingDto })
  @ApiResponse({ status: 201, description: 'Hébergement créé', type: Hosting })
  override create(@Body() dto: CreateHostingDto): Promise<Hosting> {
    return super.create(dto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Mettre à jour un hébergement' })
  @ApiParam({
    name: 'id',
    description: 'GUID de l’hébergement à mettre à jour',
  })
  @ApiBody({ type: CreateHostingDto })
  @ApiResponse({
    status: 200,
    description: 'Hébergement mis à jour',
    type: Hosting,
  })
  @ApiResponse({ status: 404, description: 'Hébergement non trouvé' })
  override update(
    @Param('id') id: string,
    @Body() dto: CreateHostingDto,
  ): Promise<Hosting> {
    return super.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Supprimer un hébergement' })
  @ApiParam({ name: 'id', description: 'GUID de l’hébergement à supprimer' })
  @ApiResponse({ status: 204, description: 'Suppression réussie' })
  override delete(@Param('id') id: string): Promise<void> {
    return super.delete(id);
  }
}
