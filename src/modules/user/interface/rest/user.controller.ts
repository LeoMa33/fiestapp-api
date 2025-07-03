import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import {
  ApiConsumes,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { User } from '../../domain/user.entity';
import { UserService } from '../../application/user.service';
import { BaseController } from '../../../../shared/base/base.controller';
import { CreateUserDto } from './dto/create-user.dto';
import { MinioService } from '../../../../shared/services/minio.service';
import { FileInterceptor } from '@nestjs/platform-express';

@ApiTags('users')
@Controller('users')
export class UserController extends BaseController<User, CreateUserDto> {
  protected service: UserService;

  constructor(
    private readonly userService: UserService,
    private readonly minioService: MinioService,
  ) {
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
  override findOne(
    @Param('id', new ParseUUIDPipe()) id: string,
  ): Promise<User> {
    return super.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Créer un nouvel utilisateur' })
  @ApiConsumes('multipart/form-data')
  @ApiResponse({ status: 201, description: 'Utilisateur créé', type: User })
  @UseInterceptors(FileInterceptor('file'))
  async create(
    @Body() dto: CreateUserDto,
    @UploadedFile() file?: Express.Multer.File,
  ): Promise<User> {
    const user = await this.service.create(dto);

    if (file) {
      await this.minioService.uploadUserAvatar(
        file.buffer,

        file.originalname,
        user.guid,
      );
    }

    return user;
  }

  @Put(':id')
  @ApiOperation({ summary: 'Mettre à jour un utilisateur avec image' })
  @ApiParam({ name: 'id', description: 'GUID de l’utilisateur' })
  @ApiConsumes('multipart/form-data')
  @ApiResponse({
    status: 200,
    description: 'Utilisateur mis à jour',
    type: User,
  })
  @UseInterceptors(FileInterceptor('file'))
  async update(
    @Param('id') id: string,
    @Body() dto: CreateUserDto,
    @UploadedFile() file?: Express.Multer.File,
  ): Promise<User> {
    const user = await this.service.update(id, dto);

    if (file) {
      await this.minioService.uploadUserAvatar(
        file.buffer,

        file.originalname,
        user.guid,
      );
    }

    return user;
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Supprimer un utilisateur' })
  @ApiParam({ name: 'id', description: 'GUID de l’utilisateur à supprimer' })
  @ApiResponse({ status: 204, description: 'Suppression réussie' })
  override delete(@Param('id') id: string): Promise<void> {
    return super.delete(id);
  }
}
