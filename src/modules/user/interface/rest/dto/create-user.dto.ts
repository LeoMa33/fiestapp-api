import { IsEnum, IsInt, IsOptional, IsString, Min } from 'class-validator';
import { AlcoholConsumption, Gender } from '../../../domain/user.entity';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class CreateUserDto {
  @ApiProperty({ example: 'JohnDoe', description: "Nom d'utilisateur" })
  @IsString()
  username: string;

  @ApiProperty({ enum: Gender, description: 'Genre de l’utilisateur' })
  @IsEnum(Gender)
  gender: Gender;

  @ApiProperty({ example: 30, description: "Âge de l'utilisateur" })
  @IsInt()
  @Min(0)
  age: number;

  @ApiProperty({ example: 175, description: 'Taille en cm' })
  @IsInt()
  @Min(0)
  height: number;

  @ApiProperty({ example: 70, description: 'Poids en kg' })
  @IsInt()
  @Min(0)
  weight: number;

  @ApiProperty({
    enum: AlcoholConsumption,
    description: 'Fréquence de consommation d’alcool',
  })
  @IsEnum(AlcoholConsumption)
  alcoholConsumption: AlcoholConsumption;

  @ApiProperty({
    type: 'string',
    format: 'binary',
    required: false,
  })
  @IsOptional()
  @Type(() => Object)
  file?: any;
}
