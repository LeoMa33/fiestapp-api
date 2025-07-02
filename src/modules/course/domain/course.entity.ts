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
import { CourseRequest } from './course-request.entity';
import {User} from "../../user/domain/user.entity";
import {Event} from "../../event/domain/event.entity";

@Entity('courses')
@Unique(['driver', 'event']) // Un conducteur ne peut conduire qu’une seule course par event
export class Course {
    @PrimaryGeneratedColumn('uuid')
    guid: string;

    @Column({ type: 'int' })
    seats: number;

    @ManyToOne(() => User, { eager: true, nullable: false })
    @JoinColumn({ name: 'driver_guid' })
    driver: User;

    @ManyToOne(() => Event, (event) => event.courses, {
        eager: true,
        nullable: false,
    })
    @JoinColumn({ name: 'event_guid' })
    event: Event;

    @OneToMany(() => CourseRequest, (request) => request.course, {
        cascade: true,
    })
    requests: CourseRequest[];

    @ManyToMany(() => User, { eager: true })
    @JoinTable({
        name: 'course_accepted_passengers',
        joinColumn: { name: 'course_guid', referencedColumnName: 'guid' },
        inverseJoinColumn: { name: 'user_guid', referencedColumnName: 'guid' },
    })
    acceptedPassengers: User[];
}
