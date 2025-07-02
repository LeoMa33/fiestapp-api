import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Course } from './course.entity';
import { User } from '../../user/domain/user.entity';

export enum RequestStatus {
  PENDING = 'pending',
  ACCEPTED = 'accepted',
  REJECTED = 'rejected',
}

@Entity('course_requests')
@Unique(['user', 'course'])
export class CourseRequest {
  @ApiProperty({
    description: 'Identifiant unique de la demande',
    example: 'e3d9b876-4e4a-4b0e-b248-8317a443a028',
  })
  @PrimaryGeneratedColumn('uuid')
  guid: string;

  @ApiProperty({
    description: 'Utilisateur ayant soumis la demande',
    type: () => User,
  })
  @ManyToOne(() => User, { eager: true, nullable: false })
  @JoinColumn({ name: 'user_guid' })
  user: User;

  @ApiProperty({
    description: 'Course concernée par la demande',
    type: () => Course,
  })
  @ManyToOne(() => Course, (course) => course.requests, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'course_guid' })
  course: Course;

  @ApiProperty({
    description: 'Statut de la demande',
    enum: RequestStatus,
    example: RequestStatus.PENDING,
  })
  @Column({
    type: 'enum',
    enum: RequestStatus,
    default: RequestStatus.PENDING,
  })
  status: RequestStatus;
}
