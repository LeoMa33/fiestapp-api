import { Test, TestingModule } from '@nestjs/testing';
import { PollController } from './poll.controller';
import { PollService } from '../../application/poll.service';
import { Poll } from '../../domain/poll.entity';
import { CreatePollDto } from './dto/create-poll.dto';
import { Event } from '../../../event/domain/event.entity';
import { User, Gender, AlcoholConsumption } from '../../../user/domain/user.entity';
import { PollOption } from '../../domain/poll-option.entity';

describe('PollController', () => {
  let controller: PollController;
  let service: PollService;

  const mockPollService = {
    createPollWithOptions: jest.fn(),
  };

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

  // Définir le poll en premier sans les options
  const mockPoll: Poll = {
    guid: '123e4567-e89b-12d3-a456-426614174002',
    question: 'Test Poll Question?',
    createdAt: new Date(),
    options: [],
    votes: [],
    event: mockEvent,
  };

  const mockPollOptions: PollOption[] = [
    {
      guid: '123e4567-e89b-12d3-a456-426614174003',
      label: 'Option 1',  // Ajout de la propriété label manquante
      poll: mockPoll,
      votes: [],
    },
    {
      guid: '123e4567-e89b-12d3-a456-426614174004',
      label: 'Option 2',  // Ajout de la propriété label manquante
      poll: mockPoll,
      votes: [],
    },
  ];

  mockPoll.options = mockPollOptions;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PollController],
      providers: [
        {
          provide: PollService,
          useValue: mockPollService,
        },
      ],
    }).compile();

    controller = module.get<PollController>(PollController);
    service = module.get<PollService>(PollService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('create', () => {
    it('should create and return a poll with options', async () => {
      const createDto: CreatePollDto = {
        question: 'Test Poll Question?',
        event: mockEvent.guid,
        options: ['Option 1', 'Option 2'],
      };

      mockPollService.createPollWithOptions.mockResolvedValue(mockPoll);

      const result = await controller.create(createDto);

      expect(result).toEqual(mockPoll);
      expect(service.createPollWithOptions).toHaveBeenCalledWith(createDto);
    });
  });
});