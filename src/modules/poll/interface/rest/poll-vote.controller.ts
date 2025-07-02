import { Body, Controller, Post } from '@nestjs/common';
import { PollVoteService } from '../../application/poll-vote.service';
import { CreatePollVoteDto } from './dto/create-poll-vote.dto';
import { PollVote } from '../../domain/poll-vote.entity';

@Controller('poll-votes')
export class PollVoteController {
    constructor(private readonly pollVoteService: PollVoteService) {}

    @Post()
    async vote(@Body() dto: CreatePollVoteDto): Promise<PollVote> {
        return this.pollVoteService.submitVote(dto.user, dto.poll, dto.option);
    }
}
