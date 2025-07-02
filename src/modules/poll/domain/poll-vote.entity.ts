import {
    Entity,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn,
    Unique,
} from 'typeorm';
import { Poll } from './poll.entity';
import { PollOption } from './poll-option.entity';
import {User} from "../../user/domain/user.entity";

@Entity('poll_votes')
@Unique(['user', 'poll']) // un vote par utilisateur par sondage
export class PollVote {
    @PrimaryGeneratedColumn('uuid')
    guid: string;

    @ManyToOne(() => User, { eager: true, nullable: false })
    @JoinColumn({ name: 'user_guid' })
    user: User;

    @ManyToOne(() => Poll, (poll) => poll.votes, {
        onDelete: 'CASCADE',
    })
    @JoinColumn({ name: 'poll_guid' })
    poll: Poll;

    @ManyToOne(() => PollOption, (option) => option.votes, {
        eager: true,
        onDelete: 'CASCADE',
    })
    @JoinColumn({ name: 'option_guid' })
    option: PollOption;
}
