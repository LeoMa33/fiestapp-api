import { Test, TestingModule } from '@nestjs/testing';
import { ExpenseController } from './expense.controller';
import { ExpenseService } from '../../application/expense.service';
import { Expense } from '../../domain/expense.entity';
import { User, Gender, AlcoholConsumption } from '../../../user/domain/user.entity';
import { Event } from '../../../event/domain/event.entity';

describe('ExpenseController', () => {
  let controller: ExpenseController;
  let service: ExpenseService;

  const mockExpenseService = {
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

  const mockExpense: Expense = {
    guid: '123e4567-e89b-12d3-a456-426614174002',
    label: 'Test Expense',
    amount_in_cent: 1500,
    user: mockUser,
    event: mockEvent,
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExpenseController],
      providers: [
        {
          provide: ExpenseService,
          useValue: mockExpenseService,
        },
      ],
    }).compile();

    controller = module.get<ExpenseController>(ExpenseController);
    service = module.get<ExpenseService>(ExpenseService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('findAll', () => {
    it('should return array of expenses', async () => {
      const expenses = [mockExpense];
      mockExpenseService.findAll.mockResolvedValue(expenses);

      const result = await controller.findAll();

      expect(result).toEqual(expenses);
      expect(service.findAll).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should return an expense by guid', async () => {
      mockExpenseService.findOne.mockResolvedValue(mockExpense);

      const result = await controller.findOne(mockExpense.guid);

      expect(result).toEqual(mockExpense);
      expect(service.findOne).toHaveBeenCalledWith(mockExpense.guid);
    });
  });

  describe('create', () => {
    it('should create and return an expense', async () => {
      const createDto = {
        label: 'New Expense',
        amount_in_cent: 1500,
        userGuid: mockUser.guid,
        eventGuid: mockEvent.guid,
      };
      mockExpenseService.create.mockResolvedValue(mockExpense);

      const result = await controller.create(createDto);

      expect(result).toEqual(mockExpense);
      expect(service.create).toHaveBeenCalledWith(createDto);
    });
  });

  describe('update', () => {
    it('should update and return an expense', async () => {
      const updateDto = { label: 'Updated Expense', amount_in_cent: 2000 };
      const updatedExpense = { ...mockExpense, label: 'Updated Expense', amount_in_cent: 2000 };
      mockExpenseService.update.mockResolvedValue(updatedExpense);

      const result = await controller.update(mockExpense.guid, updateDto);

      expect(result).toEqual(updatedExpense);
      expect(service.update).toHaveBeenCalledWith(mockExpense.guid, updateDto);
    });
  });

  describe('delete', () => {
    it('should delete an expense', async () => {
      mockExpenseService.delete.mockResolvedValue(undefined);

      const result = await controller.delete(mockExpense.guid);

      expect(result).toBeUndefined();
      expect(service.delete).toHaveBeenCalledWith(mockExpense.guid);
    });
  });
});