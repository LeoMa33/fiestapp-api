import {
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { Poll } from './poll.entity';
import { PollOption } from './poll-option.entity';
import { User } from '../../user/domain/user.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('poll_votes')
@Unique(['user', 'poll']) // un vote par utilisateur par sondage
export class PollVote {
  @ApiProperty({
    example: 'a392b3a1-7f20-45a6-92f5-15a5b72dc892',
    description: 'GUID unique du vote',
  })
  @PrimaryGeneratedColumn('uuid')
  guid: string;

  @ApiProperty({
    type: () => User,
    description: 'Utilisateur ayant voté',
  })
  @ManyToOne(() => User, { eager: true, nullable: false })
  @JoinColumn({ name: 'user_guid' })
  user: User;

  @ApiProperty({
    type: () => Poll,
    description: 'Sondage auquel appartient le vote',
  })
  @ManyToOne(() => Poll, (poll) => poll.votes, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'poll_guid' })
  poll: Poll;

  @ApiProperty({
    type: () => PollOption,
    description: 'Option choisie par l’utilisateur',
  })
  @ManyToOne(() => PollOption, (option) => option.votes, {
    eager: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'option_guid' })
  option: PollOption;
}
