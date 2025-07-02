import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import {User} from "../../user/domain/user.entity";
import {Event} from "../../event/domain/event.entity";

@Entity('expenses')
export class Expense {
    @PrimaryGeneratedColumn('uuid')
    guid: string;

    @Column()
    label: string;

    @Column({ type: 'int' })
    amount_in_cent: number;

    @ManyToOne(() => User, { eager: true, nullable: false })
    @JoinColumn({ name: 'user_guid' })
    user: User;

    @ManyToOne(() => Event, (event) => event.expenses, {
        eager: true,
        nullable: false,
        onDelete: 'CASCADE',
    })
    @JoinColumn({ name: 'event_guid' })
    event: Event;
}
