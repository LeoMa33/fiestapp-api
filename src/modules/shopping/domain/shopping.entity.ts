import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import {Event} from "../../event/domain/event.entity";

@Entity('shoppings')
export class Shopping {
    @PrimaryGeneratedColumn('uuid')
    guid: string;

    @Column()
    image: string;

    @Column({ type: 'int' })
    quantity: number;

    @Column()
    name: string;

    @ManyToOne(() => Event, (event) => event.shoppings, {
        nullable: false,
        onDelete: 'CASCADE',
    })
    @JoinColumn({ name: 'event_guid' })
    event: Event;
}
