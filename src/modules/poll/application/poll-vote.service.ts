import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from '../../../shared/base/base.service';
import { CreatePollVoteDto } from '../interface/rest/dto/create-poll-vote.dto';
import { PollVote } from '../domain/poll-vote.entity';

@Injectable()
export class PollVoteService extends BaseService<PollVote, CreatePollVoteDto> {
  constructor(
    @InjectRepository(PollVote)
    private readonly voteRepo: Repository<PollVote>,
  ) {
    super(voteRepo);
  }

  async submitVote(dto: CreatePollVoteDto) {
    const vote = this.voteRepo.create(this.mapCreateDtoToEntity(dto));
    return this.voteRepo.save(vote);
  }

  protected mapCreateDtoToEntity(dto: CreatePollVoteDto) {
    return {
      user: { guid: dto.user },
      poll: { guid: dto.poll },
      option: { guid: dto.option },
    };
  }

  protected mapUpdateDtoToEntity(dto: CreatePollVoteDto) {
    return {
      user: { guid: dto.user },
      poll: { guid: dto.poll },
      option: { guid: dto.option },
    };
  }
}
