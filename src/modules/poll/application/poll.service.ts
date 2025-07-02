import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from '../../../shared/base/base.service';
import { Poll } from '../domain/poll.entity';
import { PollOption } from '../domain/poll-option.entity';
import { CreatePollDto } from '../interface/rest/dto/create-poll.dto';

@Injectable()
export class PollService extends BaseService<Poll, CreatePollDto> {
  constructor(
    @InjectRepository(Poll)
    private readonly pollRepo: Repository<Poll>,
    @InjectRepository(PollOption)
    private readonly optionRepo: Repository<PollOption>,
  ) {
    super(pollRepo);
  }

  async createPollWithOptions(dto: CreatePollDto) {
    const poll = this.pollRepo.create(this.mapCreateDtoToEntity(dto));
    const savedPoll = await this.pollRepo.save(poll);

    const options = dto.options.map((label) =>
      this.optionRepo.create({ label, poll: savedPoll }),
    );
    await this.optionRepo.save(options);

    return this.pollRepo.findOneOrFail({
      where: { guid: savedPoll.guid },
      relations: ['options'],
    });
  }

  protected mapCreateDtoToEntity(dto: CreatePollDto) {
    return {
      question: dto.question,
      event: { guid: dto.event },
    };
  }

  protected mapUpdateDtoToEntity(dto: CreatePollDto) {
    return {
      question: dto.question,
      event: { guid: dto.event },
    };
  }
}
