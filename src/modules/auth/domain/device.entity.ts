import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { User } from '../../user/domain/user.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('devices')
@Unique(['deviceId'])
export class Device {
  @ApiProperty({ example: 'a04bde2e-9f1b-40cf-9f93-18b8c7c648e1' })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({ example: 'b41c3c2a-f5f9-4a7c-b9a9-2ef46ea08a0d' })
  @Column()
  deviceId: string;

  @ManyToOne(() => User, (user) => user.devices, { onDelete: 'CASCADE' })
  user: User;
}
