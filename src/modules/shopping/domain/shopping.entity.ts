import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Event } from '../../event/domain/event.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('shoppings')
export class Shopping {
  @ApiProperty({
    example: 'e97c24c3-3e62-4a88-85d3-6f1db1ea27f9',
    description: 'Identifiant unique de l’achat',
  })
  @PrimaryGeneratedColumn('uuid')
  guid: string;

  @ApiProperty({
    example: 'imageName',
    description: 'Nom de l’image du produit',
  })
  @Column()
  image: string;

  @ApiProperty({
    example: 3,
    description: 'Quantité du produit',
    minimum: 1,
  })
  @Column({ type: 'int' })
  quantity: number;

  @ApiProperty({
    example: 'Pack de bouteilles d’eau',
    description: 'Nom du produit acheté',
  })
  @Column()
  name: string;

  @ApiProperty({
    type: () => Event,
    description: 'Événement auquel cet achat est lié',
  })
  @ManyToOne(() => Event, (event) => event.shoppings, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'event_guid' })
  event: Event;
}
