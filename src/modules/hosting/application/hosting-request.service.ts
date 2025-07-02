import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from '../../../shared/base/base.service';
import {HostingRequest} from "../domain/hosting-request.entity";

@Injectable()
export class HostingRequestService extends BaseService<HostingRequest> {
    constructor(
        @InjectRepository(HostingRequest)
        private readonly hostingRequestRepo: Repository<HostingRequest>
    ) {
        super(hostingRequestRepo);
    }

    // méthodes de gestion de statut ici si besoin
}
