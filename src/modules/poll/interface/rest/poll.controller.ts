import { Body, Controller, Post } from '@nestjs/common';
import { PollService } from '../../application/poll.service';
import { CreatePollDto } from './dto/create-poll.dto';
import { Poll } from '../../domain/poll.entity';

@Controller('polls')
export class PollController {
    constructor(private readonly pollService: PollService) {}

    @Post()
    async create(@Body() dto: CreatePollDto): Promise<Poll> {
        return this.pollService.createPollWithOptions(dto);
    }
}
