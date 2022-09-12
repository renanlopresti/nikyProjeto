import { Request, Response } from "express";
import { Classes, ClassesInputDTO } from './../business/entities/classes';
import { CustomError } from "../business/error/CustomError";
import { ClassesDatabase } from './../data/ClassesDataBase';
import { ClassesBusiness } from "../business/ClassesRoomBusiness";


const classesBusiness = new ClassesBusiness(
    new ClassesDatabase()
);


export class ClassesController {

    async createClass(req: Request, res: Response) {
        try {
            const input: ClassesInputDTO = {
                maxStudents: req.body.maxStudents,
                startClass: req.body.startClass,
                initalDate: req.body.initalDate,
                finalDate: req.body.finalDate,
                activity: req.body.activity,
                idInstructor: req.body.idInstructor
            }
            if (
                !input.maxStudents ||
                !input.startClass ||
                !input.initalDate ||
                !input.finalDate ||
                !input.activity ||
                !input.idInstructor
            ) {
                throw new CustomError(404, "Faltou algum elemento")
            }

            await classesBusiness.createClass(input);

            res.status(200).send({ message: 'Classe criada com sucesso' });

        } catch (error) {
            res
                .status(error.statusCode || 400)
                .send({ error: error.message });
        }
    }

    async getClassById(req: Request, res: Response) {
        try {

            const id: number = Number(req.query.id);

            const result: Classes = await classesBusiness.getClassById(id);

            res.status(200).send({ result });

        } catch (error) {
            res
                .status(error.statusCode || 400)
                .send({ error: error.message });
        }
    }

    async getAllClasses(req: Request, res: Response) {
        try {

            const result: Classes[] = await classesBusiness.getAllClasses();

            res.status(200).send({ result });

        } catch (error) {
            res
                .status(error.statusCode || 400)
                .send({ error: error.message });
        }
    }

    async alterClass(req: Request, res: Response) {
        try {
            const input: Classes = {
                id: req.body.id,
                maxStudents: req.body.maxStudents,
                startClass: req.body.startClass,
                initalDate: req.body.initalDate,
                finalDate: req.body.finalDate,
                activity: req.body.activity,
                idInstructor: req.body.idInstructor
            }
            if (
                !input.id ||
                !input.maxStudents ||
                !input.startClass ||
                !input.initalDate ||
                !input.finalDate ||
                !input.activity ||
                !input.idInstructor
            ) {
                throw new CustomError(404, "Faltou algum elemento")
            }
            await classesBusiness.alterClass(input);

            res.status(200).send({ message: 'Classe atualizada!' });

        } catch (error) {
            res
                .status(error.statusCode || 400)
                .send({ error: error.message });
        }
    }
}