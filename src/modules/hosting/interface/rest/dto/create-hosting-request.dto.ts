import { IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateHostingRequestDto {
  @ApiProperty({
    description: 'GUID de l’utilisateur faisant la demande d’hébergement',
    example: 'd80e5a3e-f23c-4bd9-a15f-09b41e531a44',
  })
  @IsString()
  user: string;

  @ApiProperty({
    description: 'GUID de l’hébergement visé par la demande',
    example: 'a6fbd4d2-1c45-41b8-8916-d168f9b4b8d9',
  })
  @IsUUID()
  hosting: string;
}
