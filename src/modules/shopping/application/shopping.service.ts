import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import { Shopping } from '../domain/shopping.entity';
import { BaseService } from '../../../shared/base/base.service';
import { CreateShoppingDto } from '../interface/rest/dto/create-shopping.dto';

@Injectable()
export class ShoppingService extends BaseService<Shopping, CreateShoppingDto> {
  constructor(
    @InjectRepository(Shopping)
    private readonly shoppingRepository: Repository<Shopping>,
  ) {
    super(shoppingRepository);
  }

  protected mapCreateDtoToEntity(dto: CreateShoppingDto) {
    return {
      name: dto.name,
      quantity: dto.quantity,
      image: dto.image,
      event: { guid: dto.event },
    };
  }

  protected mapUpdateDtoToEntity(
    dto: CreateShoppingDto,
  ): QueryDeepPartialEntity<Shopping> {
    return {
      name: dto.name,
      quantity: dto.quantity,
      image: dto.image,
      event: { guid: dto.event },
    };
  }
}
