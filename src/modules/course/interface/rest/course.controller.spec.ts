import { Test, TestingModule } from '@nestjs/testing';
import { CourseController } from './course.controller';
import { CourseService } from '../../application/course.service';
import { Course } from '../../domain/course.entity';
import { AlcoholConsumption, Gender } from '../../../user/domain/user.entity';

describe('CourseController', () => {
  let controller: CourseController;
  let service: CourseService;

  const mockCourseService = {
    findAll: jest.fn(),
    findOne: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
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

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CourseController],
      providers: [
        {
          provide: CourseService,
          useValue: mockCourseService,
        },
      ],
    }).compile();

    controller = module.get<CourseController>(CourseController);
    service = module.get<CourseService>(CourseService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('findAll', () => {
    it('should return array of courses', async () => {
      const courses = [mockCourseService];
      mockCourseService.findAll.mockResolvedValue(courses);

      const result = await controller.findAll();

      expect(result).toEqual(courses);
      expect(service.findAll).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should return a course by guid', async () => {
      mockCourseService.findOne.mockResolvedValue(mockCourse);

      const result = await controller.findOne(mockCourse.guid);

      expect(result).toEqual(mockCourse);
      expect(service.findOne).toHaveBeenCalledWith(mockCourse.guid);
    });
  });

  describe('create', () => {
    it('should create and return a course', async () => {
      const createDto = {
        seats: 4,
        driverGuid: '123e4567-e89b-12d3-a456-426614174001',
        eventGuid: '123e4567-e89b-12d3-a456-426614174002'
      };
      mockCourseService.create.mockResolvedValue(mockCourse);

      const result = await controller.create(createDto);

      expect(result).toEqual(mockCourse);
      expect(service.create).toHaveBeenCalledWith(createDto);
    });
  });

  describe('update', () => {
    it('should update and return a course', async () => {
      const updateDto = { seats: 5 };
      const updatedCourse = { ...mockCourse, seats: 5 };
      mockCourseService.update.mockResolvedValue(updatedCourse);

      const result = await controller.update(mockCourse.guid, updateDto);

      expect(result).toEqual(updatedCourse);
      expect(service.update).toHaveBeenCalledWith(mockCourse.guid, updateDto);
    });
  });

  describe('delete', () => {
    it('should delete a course', async () => {
      mockCourseService.delete.mockResolvedValue(undefined);

      const result = await controller.delete(mockCourse.guid);

      expect(result).toBeUndefined();
      expect(service.delete).toHaveBeenCalledWith(mockCourse.guid);
    });
  });
});