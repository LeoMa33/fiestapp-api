import { Test, TestingModule } from '@nestjs/testing';
import { EventController } from './event.controller';
import { EventService } from '../../application/event.service';
import { Event } from '../../domain/event.entity';
import { User } from '../../../user/domain/user.entity';
import { AlcoholConsumption, Gender } from '../../../user/domain/user.entity';

describe('EventController', () => {
  let controller: EventController;
  let service: EventService;

  const mockEventService = {
    findAll: jest.fn(),
    findOne: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
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

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EventController],
      providers: [
        {
          provide: EventService,
          useValue: mockEventService,
        },
      ],
    }).compile();

    controller = module.get<EventController>(EventController);
    service = module.get<EventService>(EventService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('findAll', () => {
    it('should return array of events', async () => {
      const events = [mockEvent];
      mockEventService.findAll.mockResolvedValue(events);

      const result = await controller.findAll();

      expect(result).toEqual(events);
      expect(service.findAll).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should return an event by guid', async () => {
      mockEventService.findOne.mockResolvedValue(mockEvent);

      const result = await controller.findOne(mockEvent.guid);

      expect(result).toEqual(mockEvent);
      expect(service.findOne).toHaveBeenCalledWith(mockEvent.guid);
    });
  });

  describe('create', () => {
    it('should create and return an event', async () => {
      const createDto = {
        title: 'New Event',
        location: 'New Location',
        date: 1704067200000,
        organizerGuid: mockUser.guid,
      };
      mockEventService.create.mockResolvedValue(mockEvent);

      const result = await controller.create(createDto);

      expect(result).toEqual(mockEvent);
      expect(service.create).toHaveBeenCalledWith(createDto);
    });
  });

  describe('update', () => {
    it('should update and return an event', async () => {
      const updateDto = { title: 'Updated Event' };
      const updatedEvent = { ...mockEvent, title: 'Updated Event' };
      mockEventService.update.mockResolvedValue(updatedEvent);

      const result = await controller.update(mockEvent.guid, updateDto);

      expect(result).toEqual(updatedEvent);
      expect(service.update).toHaveBeenCalledWith(mockEvent.guid, updateDto);
    });
  });

  describe('delete', () => {
    it('should delete an event', async () => {
      mockEventService.delete.mockResolvedValue(undefined);

      const result = await controller.delete(mockEvent.guid);

      expect(result).toBeUndefined();
      expect(service.delete).toHaveBeenCalledWith(mockEvent.guid);
    });
  });
});