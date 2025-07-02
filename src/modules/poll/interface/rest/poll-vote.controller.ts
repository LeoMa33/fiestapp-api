import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PollVoteService } from '../../application/poll-vote.service';
import { CreatePollVoteDto } from './dto/create-poll-vote.dto';
import { PollVote } from '../../domain/poll-vote.entity';

@ApiTags('poll-votes')
@Controller('poll-votes')
export class PollVoteController {
  constructor(private readonly pollVoteService: PollVoteService) {}

  @Post()
  @ApiOperation({ summary: 'Soumettre un vote à un sondage' })
  @ApiResponse({ status: 201, description: 'Vote enregistré', type: PollVote })
  async vote(@Body() dto: CreatePollVoteDto): Promise<PollVote> {
    return this.pollVoteService.submitVote(dto);
  }
}
