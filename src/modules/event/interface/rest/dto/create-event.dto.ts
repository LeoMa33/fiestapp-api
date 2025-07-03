import { IsNumber, IsOptional, IsString, IsUUID } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';

export class CreateEventDto {
  @ApiProperty({
    description: 'Titre de lévénement',
    example: 'Soirée de clôture',
  })
  @IsString()
  title: string;

  @ApiProperty({
    description: 'Lieu de lévénement',
    example: 'Paris, France',
  })
  @IsString()
  location: string;

  @ApiPropertyOptional({
    description: 'Latitude du lieu (optionnelle)',
    example: 48.8566,
  })
  @IsOptional()
  @Transform(({ value }) => (value ? parseFloat(value) : undefined))
  @IsNumber()
  latitude?: number;

  @ApiPropertyOptional({
    description: 'Longitude du lieu (optionnelle)',
    example: 2.3522,
  })
  @IsOptional()
  @Transform(({ value }) => (value ? parseFloat(value) : undefined))
  @IsNumber()
  longitude?: number;

  @ApiProperty({
    description: 'Horodatage en secondes de la date de lévénement',
    example: 1735689600, // 1er janvier 2025
  })
  @Transform(({ value }) => parseInt(value))
  @IsNumber()
  date: number;

  @ApiProperty({
    description: 'GUID de lorganisateur (User)',
    example: 'a71f8de0-6f74-4c8b-9bcd-7fa4a4d890fe',
  })
  @IsUUID()
  organizer: string;

  // @ApiProperty({
  //   type: 'string',
  //   format: 'binary',
  //   required: false,
  // })
  // @IsOptional()
  // @Type(() => Object)
  // file?: any;
}
