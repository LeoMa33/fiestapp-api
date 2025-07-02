import { Controller } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CourseRequest } from '../../domain/course-request.entity';
import { CourseRequestService } from '../../application/course-request.service';
import { BaseController } from '../../../../shared/base/base.controller';
import { CreateRequestDto } from './dto/create-request.dto';

@ApiTags('course-requests')
@Controller('course-requests')
export class CourseRequestController extends BaseController<
  CourseRequest,
  CreateRequestDto
> {
  protected service: CourseRequestService;

  constructor(private readonly courseRequestService: CourseRequestService) {
    super();
    this.service = courseRequestService;
  }

  @ApiOperation({ summary: 'Récupérer toutes les demandes de course' })
  @ApiResponse({
    status: 200,
    description: 'Liste des demandes',
    type: [CourseRequest],
  })
  override findAll(): Promise<CourseRequest[]> {
    return super.findAll();
  }

  @ApiOperation({ summary: 'Récupérer une demande de course par ID' })
  @ApiParam({ name: 'id', description: 'GUID de la demande' })
  @ApiResponse({
    status: 200,
    description: 'Demande trouvée',
    type: CourseRequest,
  })
  @ApiResponse({ status: 404, description: 'Demande non trouvée' })
  override findOne(id: string): Promise<CourseRequest> {
    return super.findOne(id);
  }

  @ApiOperation({ summary: 'Créer une nouvelle demande de course' })
  @ApiResponse({
    status: 201,
    description: 'Demande créée',
    type: CourseRequest,
  })
  override create(dto: CreateRequestDto): Promise<CourseRequest> {
    return super.create(dto);
  }

  @ApiOperation({ summary: 'Mettre à jour une demande de course' })
  @ApiParam({ name: 'id', description: 'GUID de la demande à mettre à jour' })
  @ApiResponse({
    status: 200,
    description: 'Demande mise à jour',
    type: CourseRequest,
  })
  @ApiResponse({ status: 404, description: 'Demande non trouvée' })
  override update(id: string, dto: CreateRequestDto): Promise<CourseRequest> {
    return super.update(id, dto);
  }

  @ApiOperation({ summary: 'Supprimer une demande de course' })
  @ApiParam({ name: 'id', description: 'GUID de la demande à supprimer' })
  @ApiResponse({ status: 204, description: 'Demande supprimée' })
  override delete(id: string): Promise<void> {
    return super.delete(id);
  }
}
