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
import { User } from '../../user/domain/user.entity';
import { Event } from '../../event/domain/event.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('courses')
@Unique(['driver', 'event']) // Un conducteur ne peut conduire qu’une seule course par event
export class Course {
  @ApiProperty({ description: 'Identifiant unique de la course (UUID)' })
  @PrimaryGeneratedColumn('uuid')
  guid: string;

  @ApiProperty({ description: 'Nombre de places disponibles', example: 3 })
  @Column({ type: 'int' })
  seats: number;

  @ApiProperty({ description: 'Conducteur de la course', type: () => User })
  @ManyToOne(() => User, { eager: true, nullable: false })
  @JoinColumn({ name: 'driver_guid' })
  driver: User;

  @ApiProperty({
    description: 'Événement lié à cette course',
    type: () => Event,
  })
  @ManyToOne(() => Event, (event) => event.courses, {
    eager: true,
    nullable: false,
  })
  @JoinColumn({ name: 'event_guid' })
  event: Event;

  @ApiProperty({
    description: 'Demandes de participation à cette course',
    type: () => CourseRequest,
    isArray: true,
  })
  @OneToMany(() => CourseRequest, (request) => request.course, {
    cascade: true,
  })
  requests: CourseRequest[];

  @ApiProperty({
    description: 'Passagers acceptés dans la course',
    type: () => User,
    isArray: true,
  })
  @ManyToMany(() => User, { eager: true })
  @JoinTable({
    name: 'course_accepted_passengers',
    joinColumn: { name: 'course_guid', referencedColumnName: 'guid' },
    inverseJoinColumn: { name: 'user_guid', referencedColumnName: 'guid' },
  })
  acceptedPassengers: User[];
}
