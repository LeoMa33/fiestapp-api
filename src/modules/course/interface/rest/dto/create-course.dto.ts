import { IsInt, IsString, IsUUID, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCourseDto {
  @ApiProperty({
    description: "Id de l'utilisateur conducteur",
    example: '5b2e2d31-2f36-45f2-9a8e-6b6715a428e9',
  })
  @IsString()
  driver: string;

  @ApiProperty({
    description: "UUID de l'événement associé",
    example: 'e9f47036-837a-4b63-9290-804aa30659ab',
  })
  @IsUUID()
  event: string;

  @ApiProperty({
    description: 'Nombre de places disponibles',
    example: 3,
    minimum: 1,
  })
  @IsInt()
  @Min(1)
  seats: number;
}
