import { IsString, IsInt, IsUUID } from 'class-validator';

export class CreateShoppingDto {
    @IsString()
    image: string;

    @IsInt()
    quantity: number;

    @IsString()
    name: string;

    @IsUUID()
    event: string; // guid de l'événement associé
}
