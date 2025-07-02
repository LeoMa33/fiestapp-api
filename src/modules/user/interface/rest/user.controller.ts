import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from '../../domain/user.entity';
import { UserService } from '../../application/user.service';
import { BaseController } from '../../../../shared/base/base.controller';
import { CreateUserDto } from './dto/create-user.dto';

@ApiTags('users')
@Controller('users')
export class UserController extends BaseController<User, CreateUserDto> {
  protected service: UserService;

  constructor(private readonly userService: UserService) {
    super();
    this.service = userService;
  }

  @Get()
  @ApiOperation({ summary: 'Récupérer tous les utilisateurs' })
  @ApiResponse({
    status: 200,
    description: 'Liste des utilisateurs',
    type: [User],
  })
  override findAll(): Promise<User[]> {
    return super.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Récupérer un utilisateur par ID' })
  @ApiParam({ name: 'id', description: 'GUID de l’utilisateur' })
  @ApiResponse({ status: 200, description: 'Utilisateur trouvé', type: User })
  @ApiResponse({ status: 404, description: 'Utilisateur non trouvé' })
  override findOne(@Param('id') id: string): Promise<User> {
    return super.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Créer un nouvel utilisateur' })
  @ApiResponse({ status: 201, description: 'Utilisateur créé', type: User })
  override create(@Body() dto: CreateUserDto): Promise<User> {
    return super.create(dto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Mettre à jour un utilisateur' })
  @ApiParam({
    name: 'id',
    description: 'GUID de l’utilisateur à mettre à jour',
  })
  @ApiResponse({
    status: 200,
    description: 'Utilisateur mis à jour',
    type: User,
  })
  @ApiResponse({ status: 404, description: 'Utilisateur non trouvé' })
  override update(
    @Param('id') id: string,
    @Body() dto: CreateUserDto,
  ): Promise<User> {
    return super.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Supprimer un utilisateur' })
  @ApiParam({ name: 'id', description: 'GUID de l’utilisateur à supprimer' })
  @ApiResponse({ status: 204, description: 'Suppression réussie' })
  override delete(@Param('id') id: string): Promise<void> {
    return super.delete(id);
  }
}
