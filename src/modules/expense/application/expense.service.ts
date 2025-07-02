import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from '../../../shared/base/base.service';
import {Expense} from "../domain/expense.entity";

@Injectable()
export class ExpenseService extends BaseService<Expense> {
    constructor(
        @InjectRepository(Expense)
        private readonly expenseRepo: Repository<Expense>
    ) {
        super(expenseRepo);
    }
}
