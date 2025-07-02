import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './domain/user.entity';
import { UserController } from './interface/rest/user.controller';
import { UserService } from './application/user.service';

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    controllers: [UserController],
    providers: [UserService],
    exports: [UserService], // si utilisé ailleurs
})
export class UserModule {}
