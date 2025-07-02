import { Body, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';

export abstract class BaseController<
  T,
  CreateDto = any,
  UpdateDto = CreateDto,
> {
  protected abstract service: {
    findAll(): Promise<T[]>;
    findOne(id: string): Promise<T>;
    create(dto: CreateDto): Promise<T>;
    update(id: string, dto: UpdateDto): Promise<T>;
    delete(id: string): Promise<void>;
  };

  @Get()
  @ApiOperation({ summary: 'Récupérer tous les éléments' })
  @ApiResponse({ status: 200, description: 'Liste récupérée avec succès' })
  async findAll(): Promise<T[]> {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Récupérer un élément par son identifiant' })
  @ApiParam({ name: 'id', description: 'Identifiant (UUID)' })
  @ApiResponse({ status: 200, description: 'Élément trouvé' })
  @ApiResponse({ status: 404, description: 'Élément introuvable' })
  async findOne(@Param('id') id: string): Promise<T> {
    return this.service.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Créer un nouvel élément' })
  @ApiResponse({ status: 201, description: 'Création réussie' })
  async create(@Body() dto: CreateDto): Promise<T> {
    return this.service.create(dto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Mettre à jour un élément existant' })
  @ApiParam({ name: 'id', description: 'Identifiant (UUID)' })
  @ApiResponse({ status: 200, description: 'Mise à jour réussie' })
  @ApiResponse({ status: 404, description: 'Élément introuvable' })
  async update(@Param('id') id: string, @Body() dto: UpdateDto): Promise<T> {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Supprimer un élément' })
  @ApiParam({ name: 'id', description: 'Identifiant (UUID)' })
  @ApiResponse({ status: 204, description: 'Suppression réussie' })
  async delete(@Param('id') id: string): Promise<void> {
    return this.service.delete(id);
  }
}
