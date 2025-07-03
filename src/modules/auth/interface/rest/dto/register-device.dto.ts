import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsOptional, IsString, ValidateNested } from 'class-validator';
import { CreateUserDto } from '../../../../user/interface/rest/dto/create-user.dto';

export class RegisterDeviceDto {
  @ApiProperty({ example: 'device-abc-123' })
  @IsString()
  deviceId: string;

  @ApiProperty({ type: CreateUserDto })
  @ValidateNested()
  @Type(() => CreateUserDto)
  user: CreateUserDto;

  @ApiProperty({
    type: 'string',
    format: 'binary',
    required: false,
  })
  @IsOptional()
  @Type(() => Object)
  file?: any;
}
