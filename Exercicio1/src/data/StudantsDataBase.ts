import { BaseDatabase } from "./BaseDatabase";
import { CustomError } from "../business/error/CustomError";
import { Studants, StudantsInputDTO } from './../business/entities/studants';

export class StudantsDatabase extends BaseDatabase {

    private static TABLE_NAME = "studants";

    public async createStudant(obj: StudantsInputDTO): Promise<void> {
        try {
            await BaseDatabase.connection
                .insert({
                    codeRegistry: obj.codeRegistry,
                    dateRegistry: obj.dateRegistry,
                    nameStudant: obj.nameStudant,
                    address: obj.address,
                    phoneNumber: obj.phoneNumber,
                    birthDate: obj.birthDate,
                    height: obj.height,
                    presence: obj.presence,
                    privation: obj.privation,
                    idClasses: obj.idClasses,
                    HallMonitor:obj.HallMonitor
                })
                .into(StudantsDatabase.TABLE_NAME);
        } catch (error) {
            throw new CustomError(500, "An unexpected error ocurred");
        }
    }

    public async getAllStudants(): Promise<Studants[]> {
        try {
            const result = await BaseDatabase.connection
                .select("*")
                .from(StudantsDatabase.TABLE_NAME);
            return result;
        } catch (error) {
            throw new CustomError(500, "An unexpected error ocurred");
        }
    }

    public async getAllStudantsByClass(id: number): Promise<Studants[]> {
        try {
            const result = await BaseDatabase.connection
                .select("*")
                .from(StudantsDatabase.TABLE_NAME)
                .where({ idClasses: id });
            return result;
        } catch (error) {
            throw new CustomError(500, "An unexpected error ocurred");
        }
    }

    public async getStudantById(id: number): Promise<Studants> {
        try {
            const result = await BaseDatabase.connection
                .select("*")
                .from(StudantsDatabase.TABLE_NAME)
                .where({ id: id });
            return result[0];
        } catch (error) {
            throw new CustomError(500, "An unexpected error ocurred");
        }
    }

    public async alterStudant(obj: Studants) {
        try {
            await BaseDatabase.connection
                .where({ id: obj.id })
                .update({
                    codeRegistry: obj.codeRegistry,
                    dateRegistry: obj.dateRegistry,
                    nameStudant: obj.nameStudant,
                    address: obj.address,
                    phoneNumber: obj.phoneNumber,
                    birthDate: obj.birthDate,
                    height: obj.height,
                    presence: obj.presence,
                    privation: obj.privation,
                    idClasses: obj.idClasses,
                    HallMonitor:obj.HallMonitor
                })
                .from(StudantsDatabase.TABLE_NAME);
        } catch (error) {
            throw new CustomError(500, "An unexpected error ocurred");
        }
    }
}