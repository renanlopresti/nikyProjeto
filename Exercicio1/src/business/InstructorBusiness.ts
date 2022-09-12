import { InstructorDatabase } from './../data/InstructorDataBase';
import { Instructor, InstructorInputDTO } from './entities/instructor';

export class InstructorBusiness {

    constructor(
        private instructorDatabase: InstructorDatabase,
    ) { }

    async createInstructor(obj: InstructorInputDTO) {

        await this.instructorDatabase.createInstructor(obj);

    }

    async getAllInstructors() {

        const result = await this.instructorDatabase.getAllInstructor();

        return result;
    }

    async getInstructorById(id: number) {

        const result = await this.instructorDatabase.getInstructorById(id);

        return result;
    }

    async alterInstructor(obj: Instructor) {

        await this.instructorDatabase.alterInstructor(obj);

    }
}