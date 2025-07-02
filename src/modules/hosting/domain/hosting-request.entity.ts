import {
    Entity,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn,
    Column,
    Unique,
} from 'typeorm';
import { Hosting } from './hosting.entity';
import {User} from "../../user/domain/user.entity";

export enum HostingRequestStatus {
    PENDING = 'pending',
    ACCEPTED = 'accepted',
    REJECTED = 'rejected',
}

@Entity('hosting_requests')
@Unique(['user', 'hosting']) // une seule demande par user par hébergement
export class HostingRequest {
    @PrimaryGeneratedColumn('uuid')
    guid: string;

    @ManyToOne(() => User, { eager: true, nullable: false })
    @JoinColumn({ name: 'user_guid' })
    user: User;

    @ManyToOne(() => Hosting, (hosting) => hosting.requests, {
        nullable: false,
        onDelete: 'CASCADE',
    })
    @JoinColumn({ name: 'hosting_guid' })
    hosting: Hosting;

    @Column({
        type: 'enum',
        enum: HostingRequestStatus,
        default: HostingRequestStatus.PENDING,
    })
    status: HostingRequestStatus;
}
