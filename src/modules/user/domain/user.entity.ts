import { Entity, PrimaryColumn, Column, OneToMany, ManyToMany } from 'typeorm';
import { Event } from '../../event/domain/event.entity';

export enum Gender {
  MALE = 'male',
  FEMALE = 'female',
}

export enum AlcoholConsumption {
  OCCASIONAL = 'Occasional',
  REGULAR = 'Regular',
  VETERAN = 'Veteran',
}

@Entity('users')
export class User {
  @PrimaryColumn({ type: 'varchar' })
  guid: string;

  @Column()
  username: string;

  @Column({
    type: 'enum',
    enum: Gender,
  })
  gender: Gender;

  @Column({ type: 'int' })
  age: number;

  @Column({ type: 'int' })
  height: number;

  @Column({ type: 'int' })
  weight: number;

  @Column({
    type: 'enum',
    enum: AlcoholConsumption,
  })
  alcoholConsumption: AlcoholConsumption;

  @OneToMany(() => Event, (event) => event.organizer)
  events: Event[];

  @ManyToMany(() => Event, (event) => event.participants)
  eventsParticipated: Event[];
}
