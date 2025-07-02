import { Test, TestingModule } from '@nestjs/testing';
import { HostingRequestController } from './hosting-request.controller';
import { HostingRequestService } from '../../application/hosting-request.service';
import { HostingRequest, HostingRequestStatus } from '../../domain/hosting-request.entity';
import { User, Gender, AlcoholConsumption } from '../../../user/domain/user.entity';
import { Hosting } from '../../domain/hosting.entity';
import { Event } from '../../../event/domain/event.entity';

describe('HostingRequestController', () => {
  let controller: HostingRequestController;
  let service: HostingRequestService;

  const mockHostingRequestService = {
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

  const mockHostingRequest: HostingRequest = {
    guid: '123e4567-e89b-12d3-a456-426614174003',
    user: mockUser,
    hosting: mockHosting,
    status: HostingRequestStatus.PENDING,
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HostingRequestController],
      providers: [
        {
          provide: HostingRequestService,
          useValue: mockHostingRequestService,
        },
      ],
    }).compile();

    controller = module.get<HostingRequestController>(HostingRequestController);
    service = module.get<HostingRequestService>(HostingRequestService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('findAll', () => {
    it('should return array of hosting requests', async () => {
      const hostingRequests = [mockHostingRequest];
      mockHostingRequestService.findAll.mockResolvedValue(hostingRequests);

      const result = await controller.findAll();

      expect(result).toEqual(hostingRequests);
      expect(service.findAll).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should return a hosting request by guid', async () => {
      mockHostingRequestService.findOne.mockResolvedValue(mockHostingRequest);

      const result = await controller.findOne(mockHostingRequest.guid);

      expect(result).toEqual(mockHostingRequest);
      expect(service.findOne).toHaveBeenCalledWith(mockHostingRequest.guid);
    });
  });

  describe('create', () => {
    it('should create and return a hosting request', async () => {
      const createDto = {
        userGuid: mockUser.guid,
        hostingGuid: mockHosting.guid,
      };
      mockHostingRequestService.create.mockResolvedValue(mockHostingRequest);

      const result = await controller.create(createDto);

      expect(result).toEqual(mockHostingRequest);
      expect(service.create).toHaveBeenCalledWith(createDto);
    });
  });

  describe('update', () => {
    it('should update and return a hosting request', async () => {
      const updateDto = { status: HostingRequestStatus.ACCEPTED };
      const updatedRequest = { ...mockHostingRequest, status: HostingRequestStatus.ACCEPTED };
      mockHostingRequestService.update.mockResolvedValue(updatedRequest);

      const result = await controller.update(mockHostingRequest.guid, updateDto);

      expect(result).toEqual(updatedRequest);
      expect(service.update).toHaveBeenCalledWith(mockHostingRequest.guid, updateDto);
    });
  });

  describe('delete', () => {
    it('should delete a hosting request', async () => {
      mockHostingRequestService.delete.mockResolvedValue(undefined);

      const result = await controller.delete(mockHostingRequest.guid);

      expect(result).toBeUndefined();
      expect(service.delete).toHaveBeenCalledWith(mockHostingRequest.guid);
    });
  });
});