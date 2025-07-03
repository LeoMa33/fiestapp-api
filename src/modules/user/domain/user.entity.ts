import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Event } from '../../event/domain/event.entity';
import { ApiProperty } from '@nestjs/swagger';
import { Device } from '../../auth/domain/device.entity';

export enum Gender {
  MALE = 'male',
  FEMALE = 'female',
}

export enum AlcoholConsumption {
  OCCASIONAL = 'occasional',
  REGULAR = 'regular',
  VETERAN = 'veteran',
}

@Entity('users')
export class User {
  @ApiProperty({
    example: 'c4a760a2-a5f4-4f03-86b6-4f17418c1c1d',
    description: 'GUID unique de l’utilisateur (auto-généré)',
  })
  @PrimaryGeneratedColumn('uuid')
  guid: string;

  @ApiProperty({ example: 'JohnDoe', description: "Nom d'utilisateur" })
  @Column({ nullable: false })
  username: string;

  @ApiProperty({ enum: Gender, description: 'Genre de l’utilisateur' })
  @Column({
    type: 'enum',
    enum: Gender,
    enumName: 'gender_enum',
    nullable: false,
  })
  gender: Gender;

  @ApiProperty({ example: 30, description: 'Âge de l’utilisateur' })
  @Column({ type: 'int', nullable: false })
  age: number;

  @ApiProperty({ example: 175, description: 'Taille en centimètres' })
  @Column({ type: 'int', nullable: false })
  height: number;

  @ApiProperty({ example: 70, description: 'Poids en kilogrammes' })
  @Column({ type: 'int', nullable: false })
  weight: number;

  @ApiProperty({
    enum: AlcoholConsumption,
    description: 'Fréquence de consommation d’alcool',
  })
  @Column({
    type: 'enum',
    enum: AlcoholConsumption,
    enumName: 'alcohol_consumption_enum',
    nullable: false,
  })
  alcoholConsumption: AlcoholConsumption;

  @ApiProperty({ type: () => [Event], description: 'Événements organisés' })
  @OneToMany(() => Event, (event) => event.organizer)
  events: Event[];

  @ApiProperty({
    type: () => [Event],
    description: 'Événements auxquels cet utilisateur participe',
  })
  @ManyToMany(() => Event, (event) => event.participants)
  eventsParticipated: Event[];

  @OneToMany(() => Device, (device) => device.user, { cascade: true })
  devices: Device[];
}
