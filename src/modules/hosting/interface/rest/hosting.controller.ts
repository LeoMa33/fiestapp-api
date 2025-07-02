import { Controller } from '@nestjs/common';
import { Hosting } from '../../domain/hosting.entity';
import { HostingService } from '../../application/hosting.service';
import {BaseController} from "../../../../shared/base/base.controller";

@Controller('hostings')
export class HostingController extends BaseController<Hosting> {
    constructor(private readonly hostingService: HostingService) {
        super();
        this.service = hostingService;
    }

    protected service: HostingService;
}
