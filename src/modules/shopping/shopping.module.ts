import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Shopping } from './domain/shopping.entity';
import { ShoppingService } from './application/shopping.service';
import { ShoppingController } from './interface/rest/shopping.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Shopping])],
    controllers: [ShoppingController],
    providers: [ShoppingService],
    exports: [ShoppingService],
})
export class ShoppingModule {}