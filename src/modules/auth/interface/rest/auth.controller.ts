import {
  Body,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import {
  ApiBody,
  ApiConsumes,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { AuthService } from '../../application/auth.service';
import { LoginDeviceDto } from './dto/login-device.dto';
import { User } from '../../../user/domain/user.entity';
import { JwtService } from '@nestjs/jwt';
import { RegisterDeviceDto } from './dto/register-device.dto';
import { FileInterceptor } from '@nestjs/platform-express';

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
    const user: User = await this.authService.login(body.deviceId);

    const token = await this.jwtService.signAsync({ sub: user.guid });

    return {
      accessToken: token,
      user,
    };
  }

  @Post('register')
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('file'))
  @ApiOperation({
    summary: 'Register a user and link to deviceId (with avatar)',
  })
  @UsePipes(new ValidationPipe({ transform: true }))
  @ApiResponse({ status: 201, description: 'User created', type: User })
  async register(
    @Body() body: RegisterDeviceDto,
    @UploadedFile() file?: Express.Multer.File,
  ): Promise<{ accessToken: string; user: User }> {
    console.table(body);

    const user = await this.authService.register(
      body.deviceId,
      {
        age: body.age,
        username: body.username,
        gender: body.gender,
        height: body.height,
        weight: body.weight,
        alcoholConsumption: body.alcoholConsumption,
      },
      file,
    );
    const token = await this.jwtService.signAsync({ sub: user.guid });

    return {
      accessToken: token,
      user,
    };
  }
}
