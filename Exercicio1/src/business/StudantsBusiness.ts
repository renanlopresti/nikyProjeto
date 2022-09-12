import { StudantsDatabase } from './../data/StudantsDataBase';
import { Studants, StudantsInputDTO } from './entities/studants';

export class StudantsBusiness {

    constructor(
        private studantsDatabase: StudantsDatabase,
    ) { }

    async createStudant(obj: StudantsInputDTO) {

        await this.studantsDatabase.createStudant(obj);

    }

    async getAllStudants() {

        const result = await this.studantsDatabase.getAllStudants();

        return result;
    }

    async getAllStudantsByClass(id: number) {

        const result = await this.studantsDatabase.getAllStudantsByClass(id);

        return result;
    }

    async getStudantById(id: number) {

        const result = await this.studantsDatabase.getStudantById(id);

        return result;
    }

    async alterStudant(obj: Studants) {

        await this.studantsDatabase.alterStudant(obj);

    }
}