import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from './domain/event.entity';
import { EventService } from './application/event.service';
import { EventController } from './interface/rest/event.controller';
import { MinioModule } from '../../shared/services/minio.module';

@Module({
  imports: [TypeOrmModule.forFeature([Event]), MinioModule],
  controllers: [EventController],
  providers: [EventService],
  exports: [EventService],
})
export class EventModule {}
