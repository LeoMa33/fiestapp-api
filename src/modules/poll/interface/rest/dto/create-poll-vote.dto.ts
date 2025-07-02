import { IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePollVoteDto {
  @ApiProperty({
    example: '7f4f2a51-3e1a-423f-a1b1-88e4e2cb9b5c',
    description: 'GUID de l’utilisateur qui vote',
  })
  @IsUUID()
  user: string;

  @ApiProperty({
    example: 'd62f8c6c-b9a3-4d91-964e-e4e98aa3e362',
    description: 'GUID du sondage auquel appartient le vote',
  })
  @IsUUID()
  poll: string;

  @ApiProperty({
    example: 'ac7e98b5-2d38-43b5-865e-91e30d5a46ff',
    description: 'GUID de l’option choisie',
  })
  @IsUUID()
  option: string;
}
