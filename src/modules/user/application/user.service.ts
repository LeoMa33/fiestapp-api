import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from '../../../shared/base/base.service';
import {User} from "../domain/user.entity";

@Injectable()
export class UserService extends BaseService<User> {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) {
        super(userRepository);
    }
}
