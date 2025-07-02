import { IsUUID } from 'class-validator';

export class CreatePollVoteDto {
    @IsUUID()
    user: string;

    @IsUUID()
    poll: string;

    @IsUUID()
    option: string;
}
