import { IsUUID } from 'class-validator';

export class CreateRequestDto {
    @IsUUID()
    user: string;

    @IsUUID()
    course: string;
}
