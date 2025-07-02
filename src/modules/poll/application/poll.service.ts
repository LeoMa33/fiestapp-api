import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from '../../../shared/base/base.service';
import { PollOption } from '../domain/poll-option.entity';
import {Poll} from "../domain/poll.entity";

@Injectable()
export class PollService extends BaseService<Poll> {
    constructor(
        @InjectRepository(Poll)
        private readonly pollRepo: Repository<Poll>,
        @InjectRepository(PollOption)
        private readonly optionRepo: Repository<PollOption>,
    ) {
        super(pollRepo);
    }

    async createPollWithOptions(data: {
        question: string;
        event: string;
        options: string[];
    }) {
        const poll = this.pollRepo.create({
            question: data.question,
            event: { guid: data.event } as any,
        });
        const savedPoll = await this.pollRepo.save(poll);

        const optionEntities = data.options.map((label) =>
            this.optionRepo.create({ label, poll: savedPoll }),
        );

        await this.optionRepo.save(optionEntities);
        return this.pollRepo.findOneOrFail({
            where: { guid: savedPoll.guid },
            relations: ['options'],
        });
    }
}
