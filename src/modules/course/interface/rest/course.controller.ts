import { Controller } from '@nestjs/common';
import { Course } from '../../domain/course.entity';
import { CourseService } from '../../application/course.service';
import {BaseController} from "../../../../shared/base/base.controller";

@Controller('courses')
export class CourseController extends BaseController<Course> {
    constructor(private readonly courseService: CourseService) {
        super();
        this.service = courseService;
    }

    protected service: CourseService;
}
