import { IsUUID } from 'class-validator';

export class CreateHostingRequestDto {
    @IsUUID()
    user: string;

    @IsUUID()
    hosting: string;
}
