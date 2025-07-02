import { IsString, IsNumber, IsUUID, IsOptional } from 'class-validator';

export class CreateEventDto {
    @IsString()
    title: string;

    @IsString()
    location: string;

    @IsOptional()
    @IsNumber()
    latitude?: number;

    @IsOptional()
    @IsNumber()
    longitude?: number;

    @IsNumber()
    date: number; // timestamp en secondes

    @IsUUID()
    organizer: string; // guid du user
}
