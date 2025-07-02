import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn, JoinTable, ManyToMany, OneToMany,
} from 'typeorm';
import { User } from '../../user/domain/user.entity';
import {Shopping} from "../../shopping/domain/shopping.entity";
import {Course} from "../../course/domain/course.entity";
import {Expense} from "../../expense/domain/expense.entity";
import {Hosting} from "../../hosting/domain/hosting.entity";
import {Poll} from "../../poll/domain/poll.entity";

@Entity('events')
export class Event {
    @PrimaryGeneratedColumn('uuid')
    guid: string;

    @Column()
    title: string;

    @Column()
    location: string;

    @Column({ type: 'double precision', nullable: true })
    latitude: number | null;

    @Column({ type: 'double precision', nullable: true })
    longitude: number | null;

    @Column({ type: 'bigint' })
    date: number; // timestamp en secondes

    @ManyToOne(() => User, { eager: true, nullable: false })
    @JoinColumn({ name: 'organizer_guid' })
    organizer: User;

    @ManyToMany(() => User, (user) => user.eventsParticipated, { cascade: true })
    @JoinTable({
        name: 'event_participants',
        joinColumn: { name: 'event_guid', referencedColumnName: 'guid' },
        inverseJoinColumn: { name: 'user_guid', referencedColumnName: 'guid' },
    })
    participants: User[];

    @OneToMany(() => Shopping, (shopping) => shopping.event, { cascade: true })
    shoppings: Shopping[];

    @OneToMany(() => Course, (course) => course.event)
    courses: Course[];

    @OneToMany(() => Expense, (expense) => expense.event)
    expenses: Expense[];

    @OneToMany(() => Hosting, (hosting) => hosting.event)
    hostings: Hosting[];

    @OneToMany(() => Poll, (poll) => poll.event, { cascade: true })
    polls: Poll[];
}
