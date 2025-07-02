import { Test, TestingModule } from '@nestjs/testing';
import { PollVoteController } from './poll-vote.controller';
import { PollVoteService } from '../../application/poll-vote.service';
import { PollVote } from '../../domain/poll-vote.entity';
import { CreatePollVoteDto } from './dto/create-poll-vote.dto';
import { User, Gender, AlcoholConsumption } from '../../../user/domain/user.entity';
import { Poll } from '../../domain/poll.entity';
import { PollOption } from '../../domain/poll-option.entity';
import { Event } from '../../../event/domain/event.entity';

describe('PollVoteController', () => {
  let controller: PollVoteController;
  let service: PollVoteService;

  const mockPollVoteService = {
    submitVote: jest.fn(),
  };

  // Mock des entités
  const mockUser: User = {
    guid: '123e4567-e89b-12d3-a456-426614174001',
    username: 'testuser',
    gender: Gender.MALE,
    age: 30,
    height: 180,
    weight: 75,
    alcoholConsumption: AlcoholConsumption.OCCASIONAL,
    events: [],
    eventsParticipated: [],
  };

  const mockEvent: Event = {
    guid: '123e4567-e89b-12d3-a456-426614174000',
    title: 'Test Event',
    location: 'Test Location',
    latitude: 48.8566,
    longitude: 2.3522,
    date: 1704067200000,
    organizer: mockUser,
    participants: [],
    shoppings: [],
    courses: [],
    expenses: [],
    hostings: [],
    polls: [],
  };

  const mockPoll: Poll = {
    guid: '123e4567-e89b-12d3-a456-426614174002',
    question: 'Test Poll Question?',
    createdAt: new Date(),
    options: [],
    votes: [],
    event: mockEvent,
  };

  const mockPollOption: PollOption = {
    guid: '123e4567-e89b-12d3-a456-426614174003',
    label: 'Option 1',
    poll: mockPoll,
    votes: [],
  };

  // Résolution des références circulaires
  mockPoll.options = [mockPollOption];

  const mockPollVote: PollVote = {
    guid: '123e4567-e89b-12d3-a456-426614174004',
    user: mockUser,
    poll: mockPoll,
    option: mockPollOption,
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PollVoteController],
      providers: [
        {
          provide: PollVoteService,
          useValue: mockPollVoteService,
        },
      ],
    }).compile();

    controller = module.get<PollVoteController>(PollVoteController);
    service = module.get<PollVoteService>(PollVoteService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('vote', () => {
    it('should submit a vote and return the result', async () => {
      const createDto: CreatePollVoteDto = {
        user: mockUser.guid,
        poll: mockPoll.guid,
        option: mockPollOption.guid,
      };

      mockPollVoteService.submitVote.mockResolvedValue(mockPollVote);

      const result = await controller.vote(createDto);

      expect(result).toEqual(mockPollVote);
      expect(service.submitVote).toHaveBeenCalledWith(
        createDto.user,
        createDto.poll,
        createDto.option
      );
    });
  });
});