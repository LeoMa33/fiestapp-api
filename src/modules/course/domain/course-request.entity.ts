import {
    Entity,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn,
    Column,
    Unique,
} from 'typeorm';
import { Course } from './course.entity';
import {User} from "../../user/domain/user.entity";

export enum RequestStatus {
    PENDING = 'pending',
    ACCEPTED = 'accepted',
    REJECTED = 'rejected',
}

@Entity('course_requests')
@Unique(['user', 'course'])
export class CourseRequest {
    @PrimaryGeneratedColumn('uuid')
    guid: string;

    @ManyToOne(() => User, { eager: true, nullable: false })
    @JoinColumn({ name: 'user_guid' })
    user: User;

    @ManyToOne(() => Course, (course) => course.requests, {
        nullable: false,
        onDelete: 'CASCADE',
    })
    @JoinColumn({ name: 'course_guid' })
    course: Course;

    @Column({
        type: 'enum',
        enum: RequestStatus,
        default: RequestStatus.PENDING,
    })
    status: RequestStatus;
}
