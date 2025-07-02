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
import { PollService } from '../../application/poll.service';
import { Poll } from '../../domain/poll.entity';
import { CreatePollDto } from './dto/create-poll.dto';
import { BaseController } from '../../../../shared/base/base.controller';

@ApiTags('polls')
@Controller('polls')
export class PollController extends BaseController<Poll, CreatePollDto> {
  protected service: PollService;

  constructor(private readonly pollService: PollService) {
    super();
    this.service = pollService;
  }

  @Get()
  @ApiOperation({ summary: 'Lister tous les sondages' })
  @ApiResponse({ status: 200, description: 'Liste des sondages', type: [Poll] })
  override findAll(): Promise<Poll[]> {
    return super.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtenir un sondage par ID' })
  @ApiParam({ name: 'id', description: 'GUID du sondage' })
  @ApiResponse({ status: 200, description: 'Sondage trouvé', type: Poll })
  override findOne(@Param('id') id: string): Promise<Poll> {
    return super.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Mettre à jour un sondage' })
  @ApiParam({ name: 'id', description: 'GUID du sondage à modifier' })
  @ApiResponse({ status: 200, description: 'Sondage mis à jour', type: Poll })
  override update(
    @Param('id') id: string,
    @Body() dto: CreatePollDto,
  ): Promise<Poll> {
    return super.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Supprimer un sondage' })
  @ApiParam({ name: 'id', description: 'GUID du sondage à supprimer' })
  @ApiResponse({ status: 204, description: 'Suppression réussie' })
  override delete(@Param('id') id: string): Promise<void> {
    return super.delete(id);
  }

  @Post()
  @ApiOperation({ summary: 'Créer un sondage avec options' })
  @ApiResponse({ status: 201, description: 'Sondage créé', type: Poll })
  @ApiBody({ type: CreatePollDto })
  async create(@Body() dto: CreatePollDto): Promise<Poll> {
    return this.pollService.createPollWithOptions(dto);
  }
}
