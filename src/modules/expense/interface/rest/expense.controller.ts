import { Controller } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Expense } from '../../domain/expense.entity';
import { ExpenseService } from '../../application/expense.service';
import { BaseController } from '../../../../shared/base/base.controller';
import { CreateExpenseDto } from './dto/create-expense.dto';

@ApiTags('expenses')
@Controller('expenses')
export class ExpenseController extends BaseController<
  Expense,
  CreateExpenseDto
> {
  protected service: ExpenseService;

  constructor(private readonly expenseService: ExpenseService) {
    super();
    this.service = expenseService;
  }

  @ApiOperation({ summary: 'Récupérer toutes les dépenses' })
  @ApiResponse({
    status: 200,
    description: 'Liste des dépenses',
    type: [Expense],
  })
  override findAll(): Promise<Expense[]> {
    return super.findAll();
  }

  @ApiOperation({ summary: 'Récupérer une dépense par ID' })
  @ApiParam({ name: 'id', description: 'GUID de la dépense' })
  @ApiResponse({ status: 200, description: 'Dépense trouvée', type: Expense })
  @ApiResponse({ status: 404, description: 'Dépense non trouvée' })
  override findOne(id: string): Promise<Expense> {
    return super.findOne(id);
  }

  @ApiOperation({ summary: 'Créer une nouvelle dépense' })
  @ApiResponse({ status: 201, description: 'Dépense créée', type: Expense })
  override create(dto: CreateExpenseDto): Promise<Expense> {
    return super.create(dto);
  }

  @ApiOperation({ summary: 'Mettre à jour une dépense' })
  @ApiParam({ name: 'id', description: 'GUID de la dépense à mettre à jour' })
  @ApiResponse({
    status: 200,
    description: 'Dépense mise à jour',
    type: Expense,
  })
  @ApiResponse({ status: 404, description: 'Dépense non trouvée' })
  override update(id: string, dto: CreateExpenseDto): Promise<Expense> {
    return super.update(id, dto);
  }

  @ApiOperation({ summary: 'Supprimer une dépense' })
  @ApiParam({ name: 'id', description: 'GUID de la dépense à supprimer' })
  @ApiResponse({ status: 204, description: 'Suppression réussie' })
  override delete(id: string): Promise<void> {
    return super.delete(id);
  }
}
