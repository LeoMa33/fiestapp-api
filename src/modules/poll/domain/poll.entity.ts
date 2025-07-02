import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PollOption } from './poll-option.entity';
import { PollVote } from './poll-vote.entity';
import { Event } from '../../event/domain/event.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('polls')
export class Poll {
  @ApiProperty({
    example: 'd5f3b762-cc4d-44b1-9a90-8c682ad51b75',
    description: 'GUID unique du sondage',
  })
  @PrimaryGeneratedColumn('uuid')
  guid: string;

  @ApiProperty({
    example: 'Quelle activité souhaitez-vous faire après le repas ?',
    description: 'Question posée dans le sondage',
  })
  @Column()
  question: string;

  @ApiProperty({
    example: '2025-07-01T12:34:56.000Z',
    description: 'Date de création du sondage',
  })
  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @ApiProperty({
    type: () => [PollOption],
    description: 'Options disponibles pour ce sondage',
  })
  @OneToMany(() => PollOption, (option) => option.poll, {
    cascade: true,
  })
  options: PollOption[];

  @ApiProperty({
    type: () => [PollVote],
    description: 'Votes enregistrés pour ce sondage',
  })
  @OneToMany(() => PollVote, (vote) => vote.poll)
  votes: PollVote[];

  @ApiProperty({
    type: () => Event,
    description: 'Événement auquel ce sondage est lié',
  })
  @ManyToOne(() => Event, (event) => event.polls, {
    eager: true,
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'event_guid' })
  event: Event;
}
