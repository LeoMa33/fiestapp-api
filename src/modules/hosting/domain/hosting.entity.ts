import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { User } from '../../user/domain/user.entity';
import { Event } from '../../event/domain/event.entity';
import { HostingRequest } from './hosting-request.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('hostings')
@Unique(['host', 'event']) // un utilisateur ne peut héberger qu'une fois par événement
export class Hosting {
  @ApiProperty({
    example: 'e472d8f2-4126-4f99-a17c-d6e379e6ecad',
    description: 'GUID unique de l’hébergement',
  })
  @PrimaryGeneratedColumn('uuid')
  guid: string;

  @ApiProperty({
    example: 3,
    description: 'Nombre de places disponibles pour les invités',
  })
  @Column({ type: 'int' })
  seats: number;

  @ApiProperty({
    type: () => User,
    description: 'Utilisateur hôte de l’hébergement',
  })
  @ManyToOne(() => User, { eager: true, nullable: false })
  @JoinColumn({ name: 'host_guid' })
  host: User;

  @ApiProperty({
    type: () => Event,
    description: 'Événement auquel l’hébergement est lié',
  })
  @ManyToOne(() => Event, { eager: true, nullable: false })
  @JoinColumn({ name: 'event_guid' })
  event: Event;

  @ApiProperty({
    type: () => [HostingRequest],
    description: 'Demandes d’hébergement associées',
  })
  @OneToMany(() => HostingRequest, (request) => request.hosting, {
    cascade: true,
  })
  requests: HostingRequest[];

  @ApiProperty({
    type: () => [User],
    description: 'Utilisateurs acceptés dans cet hébergement',
  })
  @ManyToMany(() => User, { eager: true })
  @JoinTable({
    name: 'hosting_accepted_guests',
    joinColumn: { name: 'hosting_guid', referencedColumnName: 'guid' },
    inverseJoinColumn: { name: 'user_guid', referencedColumnName: 'guid' },
  })
  acceptedGuests: User[];
}
