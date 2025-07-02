import { IsInt, IsString, IsUUID, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateHostingDto {
  @ApiProperty({
    description: 'GUID de l’hôte (utilisateur)',
    example: 'b1a2d3f4-5678-90ab-cdef-1234567890ab',
  })
  @IsString()
  host: string;

  @ApiProperty({
    description: 'GUID de l’événement pour lequel l’hébergement est proposé',
    example: 'c9d8e7f6-1234-5678-abcd-0987654321ef',
  })
  @IsUUID()
  event: string;

  @ApiProperty({
    description: 'Nombre de places disponibles dans cet hébergement',
    example: 3,
    minimum: 1,
  })
  @IsInt()
  @Min(1)
  seats: number;
}
