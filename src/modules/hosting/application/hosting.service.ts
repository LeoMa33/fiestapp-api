import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from '../../../shared/base/base.service';
import {Hosting} from "../domain/hosting.entity";

@Injectable()
export class HostingService extends BaseService<Hosting> {
    constructor(
        @InjectRepository(Hosting)
        private readonly hostingRepo: Repository<Hosting>,
    ) {
        super(hostingRepo);
    }
}
