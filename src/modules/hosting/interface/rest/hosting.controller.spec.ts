import { Test, TestingModule } from '@nestjs/testing';
import { HostingController } from './hosting.controller';
import { HostingService } from '../../application/hosting.service';
import { Hosting } from '../../domain/hosting.entity';
import {
  User,
  Gender,
  AlcoholConsumption,
} from '../../../user/domain/user.entity';
import { Event } from '../../../event/domain/event.entity';

describe('HostingController', () => {
  let controller: HostingController;
  let service: HostingService;

  const mockHostingService = {
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

  const mockHosting: Hosting = {
    guid: '123e4567-e89b-12d3-a456-426614174002',
    seats: 3,
    host: mockUser,
    event: mockEvent,
    requests: [],
    acceptedGuests: [],
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HostingController],
      providers: [
        {
          provide: HostingService,
          useValue: mockHostingService,
        },
      ],
    }).compile();

    controller = module.get<HostingController>(HostingController);
    service = module.get<HostingService>(HostingService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('findAll', () => {
    it('should return array of hostings', async () => {
      const hostings = [mockHosting];
      mockHostingService.findAll.mockResolvedValue(hostings);

      const result = await controller.findAll();

      expect(result).toEqual(hostings);
      expect(service.findAll).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should return a hosting by guid', async () => {
      mockHostingService.findOne.mockResolvedValue(mockHosting);

      const result = await controller.findOne(mockHosting.guid);

      expect(result).toEqual(mockHosting);
      expect(service.findOne).toHaveBeenCalledWith(mockHosting.guid);
    });
  });

  describe('create', () => {
    it('should create and return a hosting', async () => {
      const createDto = {
        seats: 3,
        hostGuid: mockUser.guid,
        eventGuid: mockEvent.guid,
      };
      mockHostingService.create.mockResolvedValue(mockHosting);

      const result = await controller.create(createDto);

      expect(result).toEqual(mockHosting);
      expect(service.create).toHaveBeenCalledWith(createDto);
    });
  });

  describe('update', () => {
    it('should update and return a hosting', async () => {
      const updateDto = { seats: 5 };
      const updatedHosting = { ...mockHosting, seats: 5 };
      mockHostingService.update.mockResolvedValue(updatedHosting);

      const result = await controller.update(mockHosting.guid, updateDto);

      expect(result).toEqual(updatedHosting);
      expect(service.update).toHaveBeenCalledWith(mockHosting.guid, updateDto);
    });
  });

  describe('delete', () => {
    it('should delete a hosting', async () => {
      mockHostingService.delete.mockResolvedValue(undefined);

      const result = await controller.delete(mockHosting.guid);

      expect(result).toBeUndefined();
      expect(service.delete).toHaveBeenCalledWith(mockHosting.guid);
    });
  });
});