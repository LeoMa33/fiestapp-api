import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
    OneToMany,
} from 'typeorm';
import { Poll } from './poll.entity';
import { PollVote } from './poll-vote.entity';

@Entity('poll_options')
export class PollOption {
    @PrimaryGeneratedColumn('uuid')
    guid: string;

    @Column()
    label: string;

    @ManyToOne(() => Poll, (poll) => poll.options, {
        onDelete: 'CASCADE',
    })
    @JoinColumn({ name: 'poll_guid' })
    poll: Poll;

    @OneToMany(() => PollVote, (vote) => vote.option)
    votes: PollVote[];
}
