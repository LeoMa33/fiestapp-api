import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsEnum, IsInt, IsOptional, IsString, Min } from 'class-validator';
import {
  AlcoholConsumption,
  Gender,
} from '../../../../user/domain/user.entity';

export class RegisterDeviceDto {
  @ApiProperty({ example: 'device-abc-123' })
  @IsString()
  deviceId: string;

  @ApiProperty({ example: 'JohnDoe', description: "Nom d'utilisateur" })
  @IsString()
  username: string;

  @ApiProperty({ enum: Gender, description: 'Genre de l’utilisateur' })
  @IsEnum(Gender)
  gender: Gender;

  @ApiProperty({ example: 30, description: "Âge de l'utilisateur" })
  @IsInt()
  @Type(() => Number)
  @Min(0)
  age: number;

  @ApiProperty({ example: 175, description: 'Taille en cm' })
  @IsInt()
  @Type(() => Number)
  @Min(0)
  height: number;

  @ApiProperty({ example: 70, description: 'Poids en kg' })
  @IsInt()
  @Type(() => Number)
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
