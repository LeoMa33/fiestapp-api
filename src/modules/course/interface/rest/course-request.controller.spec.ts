import { Test, TestingModule } from '@nestjs/testing';
import { CourseRequestController } from './course-request.controller';
import { CourseRequestService } from '../../application/course-request.service';
import { CourseRequest, RequestStatus } from '../../domain/course-request.entity';
import { Course } from '../../domain/course.entity';
import { AlcoholConsumption, Gender, User } from '../../../user/domain/user.entity';

describe('CourseRequestController', () => {
  let controller: CourseRequestController;
  let service: CourseRequestService;

  const mockCourseRequestService = {
    findAll: jest.fn(),
    findOne: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  };

  const mockUser: User = {
    guid: '123e4567-e89b-12d3-a456-426614174004',
    username: 'testuser',
    gender: Gender.FEMALE,
    age: 28,
    height: 165,
    weight: 60,
    alcoholConsumption: AlcoholConsumption.REGULAR,
    events: [],
    eventsParticipated: [],
  };

  const mockCourse: Course = {
    guid: '123e4567-e89b-12d3-a456-426614174000',
    seats: 4,
    driver: {
      guid: '123e4567-e89b-12d3-a456-426614174001',
      username: 'testdriver',
      gender: Gender.MALE,
      age: 30,
      height: 180,
      weight: 75,
      alcoholConsumption: AlcoholConsumption.OCCASIONAL,
      events: [],
      eventsParticipated: [],
    },
    event: {
      guid: '123e4567-e89b-12d3-a456-426614174002',
      title: 'Test Event',
      location: 'Test Location',
      latitude: 48.8566,
      longitude: 2.3522,
      date: 1704067200000,
      participants: [],
      organizer: {
        guid: '123e4567-e89b-12d3-a456-426614174003',
        username: 'organizer',
        gender: Gender.MALE,
        age: 25,
        height: 175,
        weight: 70,
        alcoholConsumption: AlcoholConsumption.OCCASIONAL,
        events: [],
        eventsParticipated: [],
      },
      shoppings: [],
      courses: [],
      expenses: [],
      hostings: [],
      polls: [],
    },
    requests: [],
    acceptedPassengers: [],
  };

  const mockCourseRequest: CourseRequest = {
    guid: '123e4567-e89b-12d3-a456-426614174005',
    user: mockUser,
    course: mockCourse,
    status: RequestStatus.PENDING,
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CourseRequestController],
      providers: [
        {
          provide: CourseRequestService,
          useValue: mockCourseRequestService,
        },
      ],
    }).compile();

    controller = module.get<CourseRequestController>(CourseRequestController);
    service = module.get<CourseRequestService>(CourseRequestService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('findAll', () => {
    it('should return array of course requests', async () => {
      const courseRequests = [mockCourseRequest];
      mockCourseRequestService.findAll.mockResolvedValue(courseRequests);

      const result = await controller.findAll();

      expect(result).toEqual(courseRequests);
      expect(service.findAll).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should return a course request by guid', async () => {
      mockCourseRequestService.findOne.mockResolvedValue(mockCourseRequest);

      const result = await controller.findOne(mockCourseRequest.guid);

      expect(result).toEqual(mockCourseRequest);
      expect(service.findOne).toHaveBeenCalledWith(mockCourseRequest.guid);
    });
  });

  describe('create', () => {
    it('should create and return a course request', async () => {
      const createDto = {
        userGuid: mockUser.guid,
        courseGuid: mockCourse.guid
      };
      mockCourseRequestService.create.mockResolvedValue(mockCourseRequest);

      const result = await controller.create(createDto);

      expect(result).toEqual(mockCourseRequest);
      expect(service.create).toHaveBeenCalledWith(createDto);
    });
  });

  describe('update', () => {
    it('should update and return a course request', async () => {
      const updateDto = { status: RequestStatus.ACCEPTED };
      const updatedRequest = { ...mockCourseRequest, status: RequestStatus.ACCEPTED };
      mockCourseRequestService.update.mockResolvedValue(updatedRequest);

      const result = await controller.update(mockCourseRequest.guid, updateDto);

      expect(result).toEqual(updatedRequest);
      expect(service.update).toHaveBeenCalledWith(mockCourseRequest.guid, updateDto);
    });
  });

  describe('delete', () => {
    it('should delete a course request', async () => {
      mockCourseRequestService.delete.mockResolvedValue(undefined);

      const result = await controller.delete(mockCourseRequest.guid);

      expect(result).toBeUndefined();
      expect(service.delete).toHaveBeenCalledWith(mockCourseRequest.guid);
    });
  });
});