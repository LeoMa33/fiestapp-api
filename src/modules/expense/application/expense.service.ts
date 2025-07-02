import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Expense } from '../domain/expense.entity';
import { BaseService } from '../../../shared/base/base.service';
import { CreateExpenseDto } from '../interface/rest/dto/create-expense.dto';

@Injectable()
export class ExpenseService extends BaseService<Expense, CreateExpenseDto> {
  constructor(
    @InjectRepository(Expense)
    private readonly expenseRepo: Repository<Expense>,
  ) {
    super(expenseRepo);
  }

  protected mapCreateDtoToEntity(dto: CreateExpenseDto) {
    return {
      label: dto.label,
      amountInCent: dto.amount_in_cent,
      user: { guid: dto.user },
      event: { guid: dto.event },
    };
  }

  protected mapUpdateDtoToEntity(dto: CreateExpenseDto) {
    return {
      label: dto.label,
      amountInCent: dto.amount_in_cent,
      user: { guid: dto.user },
      event: { guid: dto.event },
    };
  }
}
