import { TelephoneDatabase } from './../data/TelephoneDataBase';
import { Telephone, TelephoneInputDTO } from './entities/telephone';

export class TelephoneBusiness {

    constructor(
        private telephoneDatabase: TelephoneDatabase,
    ) { }

    async createTelephone(obj: TelephoneInputDTO) {

        await this.telephoneDatabase.createTelephone(obj);

    }

    async getAllTelephoneByIdInstructor(id: number) {

        const result = await this.telephoneDatabase.getAllTelephoneByIdInstructor(id);

        return result;
    }

    async getTelephoneById(id: number) {

        const result = await this.telephoneDatabase.getTelephoneById(id);

        return result;
    }

    async alterTelephone(obj: Telephone) {

        await this.telephoneDatabase.alterTelehpone(obj);

    }
}