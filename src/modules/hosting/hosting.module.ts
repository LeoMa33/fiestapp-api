import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hosting } from './domain/hosting.entity';
import { HostingRequest } from './domain/hosting-request.entity';
import { HostingService } from './application/hosting.service';
import { HostingController } from './interface/rest/hosting.controller';
import {HostingRequestService} from "./application/hosting-request.service";
import {HostingRequestController} from "./interface/rest/hosting-request.controller";

@Module({
    imports: [TypeOrmModule.forFeature([Hosting, HostingRequest])],
    controllers: [HostingController, HostingRequestController],
    providers: [HostingService, HostingRequestService],
    exports: [HostingService],
})
export class HostingModule {}
