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
import { Shopping } from '../../domain/shopping.entity';
import { ShoppingService } from '../../application/shopping.service';
import { BaseController } from '../../../../shared/base/base.controller';
import { CreateShoppingDto } from './dto/create-shopping.dto';

@ApiTags('shoppings')
@Controller('shoppings')
export class ShoppingController extends BaseController<
  Shopping,
  CreateShoppingDto
> {
  protected service: ShoppingService;

  constructor(private readonly shoppingService: ShoppingService) {
    super();
    this.service = shoppingService;
  }

  @Get()
  @ApiOperation({ summary: 'Récupérer tous les achats (shopping items)' })
  @ApiResponse({
    status: 200,
    description: 'Liste des achats',
    type: [Shopping],
  })
  override findAll(): Promise<Shopping[]> {
    return super.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Récupérer un achat par ID' })
  @ApiParam({ name: 'id', description: 'GUID de l’achat' })
  @ApiResponse({ status: 200, description: 'Achat trouvé', type: Shopping })
  @ApiResponse({ status: 404, description: 'Achat non trouvé' })
  override findOne(@Param('id') id: string): Promise<Shopping> {
    return super.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Créer un nouvel achat' })
  @ApiResponse({ status: 201, description: 'Achat créé', type: Shopping })
  override create(@Body() dto: CreateShoppingDto): Promise<Shopping> {
    return super.create(dto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Mettre à jour un achat' })
  @ApiParam({ name: 'id', description: 'GUID de l’achat à mettre à jour' })
  @ApiResponse({ status: 200, description: 'Achat mis à jour', type: Shopping })
  @ApiResponse({ status: 404, description: 'Achat non trouvé' })
  override update(
    @Param('id') id: string,
    @Body() dto: CreateShoppingDto,
  ): Promise<Shopping> {
    return super.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Supprimer un achat' })
  @ApiParam({ name: 'id', description: 'GUID de l’achat à supprimer' })
  @ApiResponse({ status: 204, description: 'Achat supprimé' })
  override delete(@Param('id') id: string): Promise<void> {
    return super.delete(id);
  }
}
