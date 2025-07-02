import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
    OneToMany,
    Unique,
    ManyToMany,
    JoinTable,
} from 'typeorm';
import {User} from "../../user/domain/user.entity";
import {Event} from "../../event/domain/event.entity";
import {HostingRequest} from "./hosting-request.entity";

@Entity('hostings')
@Unique(['host', 'event']) // un utilisateur ne peut héberger qu'une fois par événement
export class Hosting {
    @PrimaryGeneratedColumn('uuid')
    guid: string;

    @Column({ type: 'int' })
    seats: number;

    @ManyToOne(() => User, { eager: true, nullable: false })
    @JoinColumn({ name: 'host_guid' })
    host: User;

    @ManyToOne(() => Event, { eager: true, nullable: false })
    @JoinColumn({ name: 'event_guid' })
    event: Event;

    @OneToMany(() => HostingRequest, (request) => request.hosting, {
        cascade: true,
    })
    requests: HostingRequest[];

    @ManyToMany(() => User, { eager: true })
    @JoinTable({
        name: 'hosting_accepted_guests',
        joinColumn: { name: 'hosting_guid', referencedColumnName: 'guid' },
        inverseJoinColumn: { name: 'user_guid', referencedColumnName: 'guid' },
    })
    acceptedGuests: User[];
}
