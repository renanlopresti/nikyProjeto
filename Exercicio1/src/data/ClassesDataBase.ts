import { BaseDatabase } from "./BaseDatabase";
import { CustomError } from "../business/error/CustomError";
import { Classes, ClassesInputDTO } from './../business/entities/classes';

export class ClassesDatabase extends BaseDatabase {

    private static TABLE_NAME = "classes";

    public async createClass(obj: ClassesInputDTO): Promise<void> {
        try {
            await BaseDatabase.connection
                .insert({
                    maxStudents: obj.maxStudents,
                    startClass: obj.startClass,
                    initalDate: obj.initalDate,
                    finalDate: obj.finalDate,
                    activity: obj.activity,
                    idInstructor: obj.idInstructor
                })
                .into(ClassesDatabase.TABLE_NAME);
        } catch (error) {
            throw new CustomError(500, "An unexpected error ocurred");
        }
    }

    public async getAllClasses(): Promise<Classes[]> {
        try {
            const result = await BaseDatabase.connection
                .select("*")
                .from(ClassesDatabase.TABLE_NAME);
            return result;
        } catch (error) {
            throw new CustomError(500, "An unexpected error ocurred");
        }
    }

    public async getClassById(id: number): Promise<Classes> {
        try {
            const result = await BaseDatabase.connection
                .select("*")
                .from(ClassesDatabase.TABLE_NAME)
                .where({ id: id });
            return result[0];
        } catch (error) {
            throw new CustomError(500, "An unexpected error ocurred");
        }
    }

    public async alterClasse(obj: Classes) {
        try {
            await BaseDatabase.connection
                .where({ id: obj.id })
                .update({
                    maxStudents: obj.maxStudents,
                    startClass: obj.startClass,
                    initalDate: obj.initalDate,
                    finalDate: obj.finalDate,
                    activity: obj.activity,
                    idInstructor: obj.idInstructor
                })
                .from(ClassesDatabase.TABLE_NAME);
        } catch (error) {
            throw new CustomError(500, "An unexpected error ocurred");
        }
    }
}