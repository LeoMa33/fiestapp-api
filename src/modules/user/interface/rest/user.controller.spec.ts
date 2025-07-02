import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from '../../application/user.service';
import { User, Gender, AlcoholConsumption } from '../../domain/user.entity';

describe('UserController', () => {
  let controller: UserController;
  let service: UserService;

  const mockUser: User = {
    guid: 'test-guid',
    username: 'testuser',
    gender: Gender.MALE,
    age: 25,
    height: 180,
    weight: 75,
    alcoholConsumption: AlcoholConsumption.OCCASIONAL,
    events: [],
    eventsParticipated: []
  };

  const mockUserService = {
    create: jest.fn(),
    findAll: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        {
          provide: UserService,
          useValue: mockUserService,
        },
      ],
    }).compile();

    controller = module.get<UserController>(UserController);
    service = module.get<UserService>(UserService);
  });

  it('devrait être défini', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('devrait créer un nouvel utilisateur', async () => {
      mockUserService.create.mockResolvedValue(mockUser);

      expect(await controller.create(mockUser)).toEqual(mockUser);
      expect(mockUserService.create).toHaveBeenCalledWith(mockUser);
    });
  });

  describe('findAll', () => {
    it('devrait retourner un tableau d\'utilisateurs', async () => {
      mockUserService.findAll.mockResolvedValue([mockUser]);

      expect(await controller.findAll()).toEqual([mockUser]);
      expect(mockUserService.findAll).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('devrait retourner un utilisateur par son id', async () => {
      mockUserService.findOne.mockResolvedValue(mockUser);

      expect(await controller.findOne('test-guid')).toEqual(mockUser);
      expect(mockUserService.findOne).toHaveBeenCalledWith('test-guid');
    });

    it('devrait retourner null si l\'utilisateur n\'est pas trouvé', async () => {
      mockUserService.findOne.mockResolvedValue(null);

      const result = await controller.findOne('unknown-guid');
      expect(result).toBeNull();
    });
  });

  describe('update', () => {
    it('devrait mettre à jour un utilisateur', async () => {
      const updatedUser = { ...mockUser, age: 30 };
      mockUserService.update.mockResolvedValue(updatedUser);

      const result = await controller.update('test-guid', updatedUser);
      expect(result.age).toBe(30);
      expect(mockUserService.update).toHaveBeenCalledWith('test-guid', updatedUser);
    });
  });

  describe('delete', () => {
    it('devrait supprimer un utilisateur', async () => {
      mockUserService.delete.mockResolvedValue({ affected: 1 });

      expect(await controller['service'].delete('test-guid')).toEqual({ affected: 1 });
      expect(mockUserService.delete).toHaveBeenCalledWith('test-guid');
    });
  });
});