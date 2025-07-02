import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Poll } from './poll.entity';
import { PollVote } from './poll-vote.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('poll_options')
export class PollOption {
  @ApiProperty({
    example: 'd2d1b8cf-d187-4e4e-a4b9-b2a217f3c963',
    description: 'GUID unique de l’option de sondage',
  })
  @PrimaryGeneratedColumn('uuid')
  guid: string;

  @ApiProperty({
    example: 'Soirée jeux',
    description: 'Texte de l’option proposée au vote',
  })
  @Column()
  label: string;

  @ApiProperty({
    type: () => Poll,
    description: 'Sondage auquel appartient cette option',
  })
  @ManyToOne(() => Poll, (poll) => poll.options, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'poll_guid' })
  poll: Poll;

  @ApiProperty({
    type: () => [PollVote],
    description: 'Votes ayant sélectionné cette option',
  })
  @OneToMany(() => PollVote, (vote) => vote.option)
  votes: PollVote[];
}
