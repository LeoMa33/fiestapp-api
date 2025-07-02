import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from '../../../shared/base/base.service';
import {CourseRequest} from "../domain/course-request.entity";

@Injectable()
export class CourseRequestService extends BaseService<CourseRequest> {
    constructor(
        @InjectRepository(CourseRequest)
        private readonly courseRequestRepo: Repository<CourseRequest>
    ) {
        super(courseRequestRepo);
    }

    // méthodes spécifiques pour valider/refuser une demande ici
}
