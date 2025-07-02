import { Controller } from '@nestjs/common';
import { User } from '../../domain/user.entity';
import { UserService } from '../../application/user.service';
import {BaseController} from "../../../../shared/base/base.controller";

@Controller('users')
export class UserController extends BaseController<User> {
    constructor(private readonly userService: UserService) {
        super();
        this.service = userService;
    }

    protected service: UserService;
}
