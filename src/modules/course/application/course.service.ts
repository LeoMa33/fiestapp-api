import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from '../../../shared/base/base.service';
import {Course} from "../domain/course.entity";

@Injectable()
export class CourseService extends BaseService<Course> {
    constructor(
        @InjectRepository(Course)
        private readonly courseRepo: Repository<Course>
    ) {
        super(courseRepo);
    }

    // Exemple : ajouter une méthode pour vérifier places restantes, demandes, etc.
}
