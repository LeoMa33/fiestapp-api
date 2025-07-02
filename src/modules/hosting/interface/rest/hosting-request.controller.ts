import { Controller } from '@nestjs/common';
import { HostingRequest } from '../../domain/hosting-request.entity';
import { HostingRequestService } from '../../application/hosting-request.service';
import {BaseController} from "../../../../shared/base/base.controller";

@Controller('hosting-requests')
export class HostingRequestController extends BaseController<HostingRequest> {
    constructor(private readonly hostingRequestService: HostingRequestService) {
        super();
        this.service = hostingRequestService;
    }

    protected service: HostingRequestService;
}
