import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from '../../../shared/base/base.service';
import { PollVote } from '../domain/poll-vote.entity';

@Injectable()
export class PollVoteService extends BaseService<PollVote> {
    constructor(
        @InjectRepository(PollVote)
        private readonly voteRepo: Repository<PollVote>,
    ) {
        super(voteRepo);
    }

    async submitVote(user: string, poll: string, option: string) {
        const vote = this.voteRepo.create({
            user: { guid: user } as any,
            poll: { guid: poll } as any,
            option: { guid: option } as any,
        });
        return this.voteRepo.save(vote);
    }
}
