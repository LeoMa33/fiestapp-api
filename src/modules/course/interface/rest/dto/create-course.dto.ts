import { IsUUID, IsInt, Min } from 'class-validator';

export class CreateCourseDto {
    @IsUUID()
    driver: string;

    @IsUUID()
    event: string;

    @IsInt()
    @Min(1)
    seats: number;
}
