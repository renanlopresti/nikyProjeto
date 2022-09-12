import { BaseDatabase } from "./BaseDatabase";
import { CustomError } from "../business/error/CustomError";
import { Telephone, TelephoneInputDTO } from './../business/entities/telephone';

export class TelephoneDatabase extends BaseDatabase {

    private static TABLE_NAME = "telephone";

    public async createTelephone(obj: TelephoneInputDTO): Promise<void> {
        try {
            await BaseDatabase.connection
                .insert({
                    phoneNumber: obj.phoneNumber,
                    responsable: obj.responsable,
                    idInstructor: obj.idInstructor
                })
                .into(TelephoneDatabase.TABLE_NAME);
        } catch (error) {
            throw new CustomError(500, "An unexpected error ocurred");
        }
    }

    public async getAllTelephoneByIdInstructor(id: number): Promise<Telephone[]> {
        try {
            const result = await BaseDatabase.connection
                .select("*")
                .from(TelephoneDatabase.TABLE_NAME)
                .where({ idInstructor: id });
            return result;
        } catch (error) {
            throw new CustomError(500, "An unexpected error ocurred");
        }
    }

    public async getTelephoneById(id: number): Promise<Telephone> {
        try {
            const result = await BaseDatabase.connection
                .select("*")
                .from(TelephoneDatabase.TABLE_NAME)
                .where({ id: id });
            return result[0];
        } catch (error) {
            throw new CustomError(500, "An unexpected error ocurred");
        }
    }

    public async alterTelehpone(obj: Telephone) {
        try {
            await BaseDatabase.connection
                .where({ id: obj.id })
                .update({
                    phoneNumber: obj.phoneNumber,
                    responsable: obj.responsable,
                    idInstructor: obj.idInstructor
                })
                .from(TelephoneDatabase.TABLE_NAME);
        } catch (error) {
            throw new CustomError(500, "An unexpected error ocurred");
        }
    }
}