import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    OneToMany, ManyToOne, JoinColumn,
} from 'typeorm';
import { PollOption } from './poll-option.entity';
import { PollVote } from './poll-vote.entity';
import {Event} from "../../event/domain/event.entity";

@Entity('polls')
export class Poll {
    @PrimaryGeneratedColumn('uuid')
    guid: string;

    @Column()
    question: string;

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @OneToMany(() => PollOption, (option) => option.poll, {
        cascade: true,
    })
    options: PollOption[];

    @OneToMany(() => PollVote, (vote) => vote.poll)
    votes: PollVote[];

    @ManyToOne(() => Event, (event) => event.polls, {
        eager: true,
        nullable: false,
        onDelete: 'CASCADE',
    })
    @JoinColumn({ name: 'event_guid' })
    event: Event;
}
