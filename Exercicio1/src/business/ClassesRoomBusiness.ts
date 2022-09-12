import { ClassesDatabase } from '../data/ClassesDataBase';
import { Classes, ClassesInputDTO } from "./entities/classes";

export class ClassesBusiness {

    constructor(
        private classesDatabase: ClassesDatabase,
    ) { }

    async createClass(obj: ClassesInputDTO) {

        await this.classesDatabase.createClass(obj);

    }

    async getAllClasses() {

        const result = await this.classesDatabase.getAllClasses();

        return result;
    }

    async getClassById(id: number) {

        const result = await this.classesDatabase.getClassById(id);

        return result;
    }

    async alterClass(obj: Classes) {

        await this.classesDatabase.alterClasse(obj);

    }
}