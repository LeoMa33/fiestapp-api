import { IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateRequestDto {
  @ApiProperty({
    description: "GUID de l'utilisateur faisant la demande",
    example: '9e1a8a47-2a63-47d3-802d-374aa9e2c26e',
  })
  @IsUUID()
  user: string;

  @ApiProperty({
    description: 'GUID de la course visée par la demande',
    example: '42b7a7d8-881f-4a90-b9e4-17bce51415c1',
  })
  @IsUUID()
  course: string;
}
