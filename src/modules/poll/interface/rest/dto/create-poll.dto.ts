import { ArrayMinSize, IsArray, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePollDto {
  @ApiProperty({
    description: 'Question posée dans le sondage',
    example: 'Quelle activité préférez-vous pour l’événement ?',
  })
  @IsString()
  question: string;

  @ApiProperty({
    description: 'GUID de l’événement lié au sondage',
    example: 'c92a8b2e-4d39-4b4f-bae2-f4a9d8cde7a1',
  })
  @IsUUID()
  event: string;

  @ApiProperty({
    description: 'Liste des options de réponse',
    example: ['Soirée jeux', 'Randonnée', 'Cinéma'],
    type: [String],
    minItems: 2,
  })
  @IsArray()
  @ArrayMinSize(2)
  options: string[];
}
