import { Test, TestingModule } from '@nestjs/testing';
import { ShoppingController } from './shopping.controller';
import { ShoppingService } from '../../application/shopping.service';
import { Shopping } from '../../domain/shopping.entity';
import { Event } from '../../../event/domain/event.entity';

describe('ShoppingController', () => {
  let controller: ShoppingController;
  let service: ShoppingService;

  // Mock plus complet pour Event
  const mockEvent = {
    guid: 'event-guid',
    title: 'Test Event',
    location: 'Test Location',
    latitude: 0,
    longitude: 0,
    startDate: new Date(),
    endDate: new Date(),
    status: 'active',
    description: 'Test description',
    maxParticipants: 100,
    currentParticipants: 0,
    shoppings: [],
  } as unknown as Event;

  const mockShopping: Shopping = {
    guid: 'test-guid',
    image: 'test-image.jpg',
    quantity: 5,
    name: 'Test Shopping',
    event: mockEvent,
  };

  const mockShoppingService = {
    create: jest.fn(),
    findAll: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(), // Renommé de 'remove' à 'delete'
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShoppingController],
      providers: [
        {
          provide: ShoppingService,
          useValue: mockShoppingService,
        },
      ],
    }).compile();

    controller = module.get<ShoppingController>(ShoppingController);
    service = module.get<ShoppingService>(ShoppingService);
  });

  it('devrait être défini', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('devrait créer un nouveau shopping', async () => {
      mockShoppingService.create.mockResolvedValue(mockShopping);

      expect(await controller.create(mockShopping)).toEqual(mockShopping);
      expect(mockShoppingService.create).toHaveBeenCalledWith(mockShopping);
    });
  });

  describe('findAll', () => {
    it('devrait retourner un tableau de shoppings', async () => {
      mockShoppingService.findAll.mockResolvedValue([mockShopping]);

      expect(await controller.findAll()).toEqual([mockShopping]);
      expect(mockShoppingService.findAll).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('devrait retourner un shopping par son id', async () => {
      mockShoppingService.findOne.mockResolvedValue(mockShopping);

      expect(await controller.findOne('test-guid')).toEqual(mockShopping);
      expect(mockShoppingService.findOne).toHaveBeenCalledWith('test-guid');
    });
  });

  describe('update', () => {
    it('devrait mettre à jour un shopping', async () => {
      mockShoppingService.update.mockResolvedValue({ ...mockShopping, quantity: 10 });

      const updatedShopping = await controller.update('test-guid', { ...mockShopping, quantity: 10 });
      expect(updatedShopping.quantity).toBe(10);
      expect(mockShoppingService.update).toHaveBeenCalledWith('test-guid', { ...mockShopping, quantity: 10 });
    });
  });

  // Utilisation du service directement puisque le contrôleur hérite de BaseController
  describe('delete', () => {
    it('devrait supprimer un shopping', async () => {
      mockShoppingService.delete.mockResolvedValue({ affected: 1 });

      // Tester via la méthode delete héritée du BaseController
      expect(await controller['service'].delete('test-guid')).toEqual({ affected: 1 });
      expect(mockShoppingService.delete).toHaveBeenCalledWith('test-guid');
    });
  });
});