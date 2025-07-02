import { IsNumber, IsOptional, IsString, IsUUID } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class CreateEventDto {
  @ApiProperty({
    description: 'Titre de l’événement',
    example: 'Soirée de clôture',
  })
  @IsString()
  title: string;

  @ApiProperty({
    description: 'Lieu de l’événement',
    example: 'Paris, France',
  })
  @IsString()
  location: string;

  @ApiPropertyOptional({
    description: 'Latitude du lieu (optionnelle)',
    example: 48.8566,
  })
  @IsOptional()
  @IsNumber()
  latitude?: number;

  @ApiPropertyOptional({
    description: 'Longitude du lieu (optionnelle)',
    example: 2.3522,
  })
  @IsOptional()
  @IsNumber()
  longitude?: number;

  @ApiProperty({
    description: 'Horodatage en secondes de la date de l’événement',
    example: 1735689600, // 1er janvier 2025
  })
  @IsNumber()
  date: number;

  @ApiProperty({
    description: 'GUID de l’organisateur (User)',
    example: 'a71f8de0-6f74-4c8b-9bcd-7fa4a4d890fe',
  })
  @IsUUID()
  organizer: string;

  @ApiProperty({
    type: 'string',
    format: 'binary',
    required: false,
  })
  @IsOptional()
  @Type(() => Object)
  file?: any;
}
