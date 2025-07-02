import { IsInt, IsString, IsUUID, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateShoppingDto {
  @ApiProperty({
    example: 'imageName',
    description: 'nom de l’image du produit',
  })
  @IsString()
  image: string;

  @ApiProperty({
    example: 3,
    description: 'Quantité du produit',
    minimum: 1,
  })
  @IsInt()
  @Min(1)
  quantity: number;

  @ApiProperty({
    example: 'Pack de bouteilles d’eau',
    description: 'Nom du produit',
  })
  @IsString()
  name: string;

  @ApiProperty({
    example: 'e0bfa82d-2e91-4be0-a6a7-9876f83d2451',
    description: 'GUID de l’événement associé',
  })
  @IsUUID()
  event: string;
}
