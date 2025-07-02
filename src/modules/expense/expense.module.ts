import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Expense } from './domain/expense.entity';
import { ExpenseService } from './application/expense.service';
import { ExpenseController } from './interface/rest/expense.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Expense])],
    controllers: [ExpenseController],
    providers: [ExpenseService],
    exports: [ExpenseService],
})
export class ExpenseModule {}
