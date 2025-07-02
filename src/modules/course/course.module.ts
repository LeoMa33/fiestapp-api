import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from './domain/course.entity';
import { CourseRequest } from './domain/course-request.entity';
import { CourseService } from './application/course.service';
import { CourseController } from './interface/rest/course.controller';
import { CourseRequestService } from './application/course-request.service';
import {CourseRequestController} from "./interface/rest/course-request.controller";

@Module({
    imports: [TypeOrmModule.forFeature([Course, CourseRequest])],
    controllers: [CourseController, CourseRequestController],
    providers: [CourseService, CourseRequestService],
    exports: [CourseService],
})
export class CourseModule {}
