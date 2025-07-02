import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './domain/user.entity';
import { UserController } from './interface/rest/user.controller';
import { UserService } from './application/user.service';
import { MinioModule } from 'src/shared/services/minio.module';

@Module({
  imports: [TypeOrmModule.forFeature([User]), MinioModule],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService], // si utilisé ailleurs
})
export class UserModule {}
