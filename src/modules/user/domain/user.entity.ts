import { Column, Entity, ManyToMany, OneToMany, PrimaryColumn } from 'typeorm';
import { Event } from '../../event/domain/event.entity';
import { ApiProperty } from '@nestjs/swagger';

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
  @ApiProperty({
    example: 'abc123',
    description: 'GUID unique de l’utilisateur (fourni côté client)',
  })
  @PrimaryColumn({ type: 'varchar' })
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
}
