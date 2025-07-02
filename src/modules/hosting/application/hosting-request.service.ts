import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from '../../../shared/base/base.service';
import { HostingRequest } from '../domain/hosting-request.entity';
import { CreateHostingRequestDto } from '../interface/rest/dto/create-hosting-request.dto';

@Injectable()
export class HostingRequestService extends BaseService<
  HostingRequest,
  CreateHostingRequestDto
> {
  constructor(
    @InjectRepository(HostingRequest)
    private readonly hostingRequestRepo: Repository<HostingRequest>,
  ) {
    super(hostingRequestRepo);
  }

  protected mapCreateDtoToEntity(dto: CreateHostingRequestDto) {
    return {
      user: { guid: dto.user },
      hosting: { guid: dto.hosting },
    };
  }

  protected mapUpdateDtoToEntity(dto: CreateHostingRequestDto) {
    return {
      user: { guid: dto.user },
      hosting: { guid: dto.hosting },
    };
  }

  // méthodes métiers supplémentaires ici (acceptation/refus, etc.)
}
