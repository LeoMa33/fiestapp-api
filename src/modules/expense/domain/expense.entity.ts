import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../../user/domain/user.entity';
import { Event } from '../../event/domain/event.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('expenses')
export class Expense {
  @ApiProperty({
    description: 'Identifiant unique de la dépense (UUID)',
    example: 'a1b2c3d4-e5f6-7890-abcd-1234567890ef',
  })
  @PrimaryGeneratedColumn('uuid')
  guid: string;

  @ApiProperty({
    description: 'Libellé ou description de la dépense',
    example: 'Courses pour l’événement',
  })
  @Column()
  label: string;

  @ApiProperty({
    description: 'Montant de la dépense en centimes',
    example: 1299,
  })
  @Column({ type: 'int' })
  amount_in_cent: number;

  @ApiProperty({
    description: 'Utilisateur ayant effectué la dépense',
    type: () => User,
  })
  @ManyToOne(() => User, { eager: true, nullable: false })
  @JoinColumn({ name: 'user_guid' })
  user: User;

  @ApiProperty({
    description: 'Événement lié à la dépense',
    type: () => Event,
  })
  @ManyToOne(() => Event, (event) => event.expenses, {
    eager: true,
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'event_guid' })
  event: Event;
}
