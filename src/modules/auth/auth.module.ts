import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { User } from '../user/domain/user.entity';
import { Device } from './domain/device.entity';
import { AuthService } from './application/auth.service';
import { AuthController } from './interface/rest/auth.controller';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Device]),
    JwtModule.register({ secret: 'your_jwt_secret_here' }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class DeviceAuthModule {}
