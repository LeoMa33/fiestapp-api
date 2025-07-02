import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from '../../application/auth.service';
import { LoginDeviceDto } from './dto/login-device.dto';
import { User } from '../../../user/domain/user.entity';
import { JwtService } from '@nestjs/jwt';

@ApiTags('Device Auth')
@Controller('auth/device')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly jwtService: JwtService,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Login or register a user based on deviceId' })
  @ApiBody({ type: LoginDeviceDto })
  @ApiResponse({
    status: 200,
    description: 'Returns JWT access token and associated user',
    schema: {
      example: {
        accessToken: 'eyJhbGciOi...',
        user: {
          id: 'uuid-user-1234',
          createdAt: '2025-07-02T10:32:00.000Z',
        },
      },
    },
  })
  async login(
    @Body() body: LoginDeviceDto,
  ): Promise<{ accessToken: string; user: User }> {
    const user: User = await this.authService.loginOrRegister(body.deviceId);

    const token = await this.jwtService.signAsync({ sub: user.guid });

    return {
      accessToken: token,
      user,
    };
  }
}
