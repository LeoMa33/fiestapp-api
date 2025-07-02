import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Shopping } from '../domain/shopping.entity';
import { BaseService } from '../../../shared/base/base.service';

@Injectable()
export class ShoppingService extends BaseService<Shopping> {
    constructor(
        @InjectRepository(Shopping)
        private readonly shoppingRepository: Repository<Shopping>,
    ) {
        super(shoppingRepository);
    }
}
