import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { User } from '../../user/domain/user.entity';
import { Shopping } from '../../shopping/domain/shopping.entity';
import { Course } from '../../course/domain/course.entity';
import { Expense } from '../../expense/domain/expense.entity';
import { Hosting } from '../../hosting/domain/hosting.entity';
import { Poll } from '../../poll/domain/poll.entity';

@Entity('events')
export class Event {
  @ApiProperty({
    description: 'Identifiant unique de l’événement',
    example: 'f3a1db80-4f7e-4c3a-aaa0-1ecb1216c2b5',
  })
  @PrimaryGeneratedColumn('uuid')
  guid: string;

  @ApiProperty({
    description: 'Titre de l’événement',
    example: 'Anniversaire de Julie',
  })
  @Column()
  title: string;

  @ApiProperty({ description: 'Lieu de l’événement', example: 'Lyon, France' })
  @Column()
  location: string;

  @ApiProperty({
    description: 'Latitude du lieu',
    example: 45.764043,
    required: false,
    nullable: true,
  })
  @Column({ type: 'double precision', nullable: true })
  latitude: number | null;

  @ApiProperty({
    description: 'Longitude du lieu',
    example: 4.835659,
    required: false,
    nullable: true,
  })
  @Column({ type: 'double precision', nullable: true })
  longitude: number | null;

  @ApiProperty({
    description: 'Horodatage (en secondes) de l’événement',
    example: 1735689600,
  })
  @Column({ type: 'bigint' })
  date: number;

  @ApiProperty({
    description: 'Organisateur de l’événement',
    type: () => User,
  })
  @ManyToOne(() => User, { eager: true, nullable: false })
  @JoinColumn({ name: 'organizer_guid' })
  organizer: User;

  @ApiProperty({
    description: 'Participants inscrits à l’événement',
    type: () => [User],
  })
  @ManyToMany(() => User, (user) => user.eventsParticipated, { cascade: true })
  @JoinTable({
    name: 'event_participants',
    joinColumn: { name: 'event_guid', referencedColumnName: 'guid' },
    inverseJoinColumn: { name: 'user_guid', referencedColumnName: 'guid' },
  })
  participants: User[];

  @ApiProperty({ description: 'Liste des courses', type: () => [Course] })
  @OneToMany(() => Course, (course) => course.event)
  courses: Course[];

  @ApiProperty({ description: 'Liste des achats', type: () => [Shopping] })
  @OneToMany(() => Shopping, (shopping) => shopping.event, { cascade: true })
  shoppings: Shopping[];

  @ApiProperty({ description: 'Liste des dépenses', type: () => [Expense] })
  @OneToMany(() => Expense, (expense) => expense.event)
  expenses: Expense[];

  @ApiProperty({ description: 'Liste des hébergements', type: () => [Hosting] })
  @OneToMany(() => Hosting, (hosting) => hosting.event)
  hostings: Hosting[];

  @ApiProperty({ description: 'Liste des sondages', type: () => [Poll] })
  @OneToMany(() => Poll, (poll) => poll.event, { cascade: true })
  polls: Poll[];
}
