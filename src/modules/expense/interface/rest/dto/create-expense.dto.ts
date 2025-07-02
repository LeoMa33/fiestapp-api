import { IsInt, IsString, IsUUID, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateExpenseDto {
  @ApiProperty({
    description: 'Libellé de la dépense',
    example: 'Location de salle',
  })
  @IsString()
  label: string;

  @ApiProperty({
    description: 'Montant en centimes',
    example: 4500,
    minimum: 0,
  })
  @IsInt()
  @Min(0)
  amount_in_cent: number;

  @ApiProperty({
    description: 'GUID de l’utilisateur ayant engagé la dépense',
    example: 'b12f4a4e-3d4c-4c55-a13a-9f4b71bbee21',
  })
  @IsUUID()
  user: string;

  @ApiProperty({
    description: 'GUID de l’événement concerné',
    example: '7a9c341b-8845-4e11-b313-0d819121a9f9',
  })
  @IsUUID()
  event: string;
}
