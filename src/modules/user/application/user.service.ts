import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from '../../../shared/base/base.service';
import { User } from '../domain/user.entity';
import { CreateUserDto } from '../interface/rest/dto/create-user.dto';

@Injectable()
export class UserService extends BaseService<User, CreateUserDto> {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {
    super(userRepository);
  }

  protected mapCreateDtoToEntity(dto: CreateUserDto) {
    return {
      username: dto.username,
      gender: dto.gender,
      age: dto.age,
      height: dto.height,
      weight: dto.weight,
      alcoholConsumption: dto.alcoholConsumption,
    };
  }

  protected mapUpdateDtoToEntity(dto: CreateUserDto) {
    return {
      username: dto.username,
      gender: dto.gender,
      age: dto.age,
      height: dto.height,
      weight: dto.weight,
      alcoholConsumption: dto.alcoholConsumption,
    };
  }
}
