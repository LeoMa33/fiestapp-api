import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { Hosting } from './hosting.entity';
import { User } from '../../user/domain/user.entity';
import { ApiProperty } from '@nestjs/swagger';

export enum HostingRequestStatus {
  PENDING = 'pending',
  ACCEPTED = 'accepted',
  REJECTED = 'rejected',
}

@Entity('hosting_requests')
@Unique(['user', 'hosting']) // une seule demande par user par hébergement
export class HostingRequest {
  @ApiProperty({
    example: 'f61c7a54-8854-4201-a228-7a5010c7fef9',
    description: 'GUID unique de la demande d’hébergement',
  })
  @PrimaryGeneratedColumn('uuid')
  guid: string;

  @ApiProperty({
    type: () => User,
    description: 'Utilisateur qui fait la demande',
  })
  @ManyToOne(() => User, { eager: true, nullable: false })
  @JoinColumn({ name: 'user_guid' })
  user: User;

  @ApiProperty({
    type: () => Hosting,
    description: 'Hébergement visé par la demande',
  })
  @ManyToOne(() => Hosting, (hosting) => hosting.requests, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'hosting_guid' })
  hosting: Hosting;

  @ApiProperty({
    enum: HostingRequestStatus,
    description: 'Statut de la demande (par défaut: pending)',
    example: HostingRequestStatus.PENDING,
  })
  @Column({
    type: 'enum',
    enum: HostingRequestStatus,
    default: HostingRequestStatus.PENDING,
  })
  status: HostingRequestStatus;
}
