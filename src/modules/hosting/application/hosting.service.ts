import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from '../../../shared/base/base.service';
import { Hosting } from '../domain/hosting.entity';
import { CreateHostingDto } from '../interface/rest/dto/create-hosting.dto';

@Injectable()
export class HostingService extends BaseService<Hosting, CreateHostingDto> {
  constructor(
    @InjectRepository(Hosting)
    private readonly hostingRepo: Repository<Hosting>,
  ) {
    super(hostingRepo);
  }

  protected mapCreateDtoToEntity(dto: CreateHostingDto) {
    return {
      seats: dto.seats,
      host: { guid: dto.host },
      event: { guid: dto.event },
    };
  }

  protected mapUpdateDtoToEntity(dto: CreateHostingDto) {
    return {
      seats: dto.seats,
      host: { guid: dto.host },
      event: { guid: dto.event },
    };
  }
}
