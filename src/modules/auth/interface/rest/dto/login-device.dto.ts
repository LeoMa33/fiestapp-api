import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class LoginDeviceDto {
  @ApiProperty({ example: 'b41c3c2a-f5f9-4a7c-b9a9-2ef46ea08a0d' })
  @IsString()
  deviceId: string;
}
