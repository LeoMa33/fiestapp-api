import { ApiProperty } from '@nestjs/swagger';
import { User } from '../../../../user/domain/user.entity';

export class RegisterResponseDto {
  @ApiProperty({
    type: String,
    description: 'JWT access token du nouvel utilisateur',
  })
  accessToken: string;

  @ApiProperty({
    type: () => User,
    description: 'Utilisateur nouvellement créé',
  })
  user: User;
}
