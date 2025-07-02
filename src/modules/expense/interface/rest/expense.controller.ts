import { Controller } from '@nestjs/common';
import { Expense } from '../../domain/expense.entity';
import { ExpenseService } from '../../application/expense.service';
import {BaseController} from "../../../../shared/base/base.controller";

@Controller('expenses')
export class ExpenseController extends BaseController<Expense> {
    constructor(private readonly expenseService: ExpenseService) {
        super();
        this.service = expenseService;
    }

    protected service: ExpenseService;
}
