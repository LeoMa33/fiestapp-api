import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Poll } from './domain/poll.entity';
import { PollOption } from './domain/poll-option.entity';
import { PollVote } from './domain/poll-vote.entity';
import { PollService } from './application/poll.service';
import { PollVoteService } from './application/poll-vote.service';
import { PollController } from './interface/rest/poll.controller';
import { PollVoteController } from './interface/rest/poll-vote.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Poll, PollOption, PollVote])],
    providers: [PollService, PollVoteService],
    controllers: [PollController, PollVoteController],
    exports: [PollService, PollVoteService],
})
export class PollModule {}
