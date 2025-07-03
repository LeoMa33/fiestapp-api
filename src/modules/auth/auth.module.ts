import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { Device } from './domain/device.entity';
import { AuthService } from './application/auth.service';
import { AuthController } from './interface/rest/auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { MinioModule } from '../../shared/services/minio.module';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Device]),
    MinioModule,
    UserModule,
    JwtModule.register({ secret: 'your_jwt_secret_here' }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class DeviceAuthModule {}
