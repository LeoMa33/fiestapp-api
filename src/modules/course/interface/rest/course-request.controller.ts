import { Controller } from '@nestjs/common';
import { CourseRequest } from '../../domain/course-request.entity';
import { CourseRequestService } from '../../application/course-request.service';
import {BaseController} from "../../../../shared/base/base.controller";

@Controller('course-requests')
export class CourseRequestController extends BaseController<CourseRequest> {
    constructor(private readonly courseRequestService: CourseRequestService) {
        super();
        this.service = courseRequestService;
    }

    protected service: CourseRequestService;
}
