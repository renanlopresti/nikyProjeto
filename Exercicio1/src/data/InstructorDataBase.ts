import { BaseDatabase } from "./BaseDatabase";
import { CustomError } from "../business/error/CustomError";
import { Instructor, InstructorInputDTO } from './../business/entities/instructor';

export class InstructorDatabase extends BaseDatabase {

    private static TABLE_NAME = "instructor";

    public async createInstructor(obj: InstructorInputDTO): Promise<void> {
        try {
            await BaseDatabase.connection
                .insert({
                    rgInstructor: obj.rgInstructor,
                    nameInstructor: obj.nameInstructor,
                    birthDate: obj.birthDate,
                    titration: obj.titration
                })
                .into(InstructorDatabase.TABLE_NAME);
        } catch (error) {
            throw new CustomError(500, "An unexpected error ocurred");
        }
    }

    public async getAllInstructor(): Promise<Instructor[]> {
        try {
            const result = await BaseDatabase.connection
                .select("*")
                .from(InstructorDatabase.TABLE_NAME);
            return result;
        } catch (error) {
            throw new CustomError(500, "An unexpected error ocurred");
        }
    }

    public async getInstructorById(id: number): Promise<Instructor> {
        try {
            const result = await BaseDatabase.connection
                .select("*")
                .from(InstructorDatabase.TABLE_NAME)
                .where({ id: id });
            return result[0];
        } catch (error) {
            throw new CustomError(500, "An unexpected error ocurred");
        }
    }

    public async alterInstructor(obj: Instructor) {
        try {
            await BaseDatabase.connection
                .where({ id: obj.id })
                .update({
                    rgInstructor: obj.rgInstructor,
                    nameInstructor: obj.nameInstructor,
                    birthDate: obj.birthDate,
                    titration: obj.titration
                })
                .from(InstructorDatabase.TABLE_NAME);
        } catch (error) {
            throw new CustomError(500, "An unexpected error ocurred");
        }
    }
}