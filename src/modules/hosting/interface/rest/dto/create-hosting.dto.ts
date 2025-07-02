import { IsUUID, IsInt, Min } from 'class-validator';

export class CreateHostingDto {
    @IsUUID()
    host: string;

    @IsUUID()
    event: string;

    @IsInt()
    @Min(1)
    seats: number;
}
