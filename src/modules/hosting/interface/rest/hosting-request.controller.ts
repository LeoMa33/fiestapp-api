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
import { HostingRequest } from '../../domain/hosting-request.entity';
import { HostingRequestService } from '../../application/hosting-request.service';
import { BaseController } from '../../../../shared/base/base.controller';
import { CreateHostingRequestDto } from './dto/create-hosting-request.dto';

@ApiTags('hosting-requests')
@Controller('hosting-requests')
export class HostingRequestController extends BaseController<
  HostingRequest,
  CreateHostingRequestDto
> {
  protected service: HostingRequestService;

  constructor(private readonly hostingRequestService: HostingRequestService) {
    super();
    this.service = hostingRequestService;
  }

  @Get()
  @ApiOperation({ summary: 'Récupérer toutes les demandes d’hébergement' })
  @ApiResponse({
    status: 200,
    description: 'Liste des demandes',
    type: [HostingRequest],
  })
  override findAll(): Promise<HostingRequest[]> {
    return super.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Récupérer une demande par ID' })
  @ApiParam({ name: 'id', description: 'GUID de la demande' })
  @ApiResponse({
    status: 200,
    description: 'Demande trouvée',
    type: HostingRequest,
  })
  @ApiResponse({ status: 404, description: 'Demande non trouvée' })
  override findOne(@Param('id') id: string): Promise<HostingRequest> {
    return super.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Créer une demande d’hébergement' })
  @ApiBody({ type: CreateHostingRequestDto })
  @ApiResponse({
    status: 201,
    description: 'Demande créée',
    type: HostingRequest,
  })
  override create(
    @Body() dto: CreateHostingRequestDto,
  ): Promise<HostingRequest> {
    return super.create(dto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Mettre à jour une demande' })
  @ApiParam({ name: 'id', description: 'GUID de la demande à mettre à jour' })
  @ApiBody({ type: CreateHostingRequestDto })
  @ApiResponse({
    status: 200,
    description: 'Demande mise à jour',
    type: HostingRequest,
  })
  @ApiResponse({ status: 404, description: 'Demande non trouvée' })
  override update(
    @Param('id') id: string,
    @Body() dto: CreateHostingRequestDto,
  ): Promise<HostingRequest> {
    return super.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Supprimer une demande' })
  @ApiParam({ name: 'id', description: 'GUID de la demande à supprimer' })
  @ApiResponse({ status: 204, description: 'Demande supprimée' })
  override delete(@Param('id') id: string): Promise<void> {
    return super.delete(id);
  }
}
