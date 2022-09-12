import { Telephone } from './../business/entities/telephone';
import { TelephoneDatabase } from './../data/TelephoneDataBase';
import { TelephoneBusiness } from './../business/TelephoneBusiness';
import { Instructor, InstructorInputDTO } from './../business/entities/instructor';
import { InstructorBusiness } from './../business/InstructorBusiness';
import { InstructorDatabase } from './../data/InstructorDataBase';
import { Request, Response } from "express";
import { CustomError } from "../business/error/CustomError";

const instructorBusiness = new InstructorBusiness(
    new InstructorDatabase()
);

const telephoneBusiness = new TelephoneBusiness(
    new TelephoneDatabase()
);

export class InstructorController {

    async createInstructor(req: Request, res: Response) {
        try {
            const input: InstructorInputDTO = {
                rgInstructor: req.body.rgInstructor,
                nameInstructor: req.body.nameInstructor,
                birthDate: req.body.birthDate,
                titration: req.body.titration
            }
            if (
                !input.rgInstructor ||
                !input.nameInstructor ||
                !input.birthDate ||
                !input.titration
            ) {
                throw new CustomError(404, "Faltou algum elemento")
            }

            await instructorBusiness.createInstructor(input);

            res.status(200).send({ message: 'Instrutor criado com sucesso' });

        } catch (error) {
            res
                .status(error.statusCode || 400)
                .send({ error: error.message });
        }
    }

    async getInstructorById(req: Request, res: Response) {
        try {

            const id: number = Number(req.query.id);

            const instructor: Instructor = await instructorBusiness.getInstructorById(id);
            const telephones: Telephone[] = await telephoneBusiness.getAllTelephoneByIdInstructor(id);

            const result = { ...instructor, telephones: telephones }

            res.status(200).send({ result });

        } catch (error) {
            res
                .status(error.statusCode || 400)
                .send({ error: error.message });
        }
    }

    async getAllInstructors(req: Request, res: Response) {
        try {

            const result: Instructor[] = await instructorBusiness.getAllInstructors();

            res.status(200).send({ result });

        } catch (error) {
            res
                .status(error.statusCode || 400)
                .send({ error: error.message });
        }
    }

    async alterInstructor(req: Request, res: Response) {
        try {
            const input: Instructor = {
                id: req.body.id,
                rgInstructor: req.body.rgInstructor,
                nameInstructor: req.body.nameInstructor,
                birthDate: req.body.birthDate,
                titration: req.body.titration
            }
            if (
                !input.id ||
                !input.rgInstructor ||
                !input.nameInstructor ||
                !input.birthDate ||
                !input.titration
            ) {
                throw new CustomError(404, "Faltou algum elemento")
            }

            await instructorBusiness.alterInstructor(input);

            res.status(200).send({ message: 'Instrutor alterado' });

        } catch (error) {
            res
                .status(error.statusCode || 400)
                .send({ error: error.message });
        }
    }
}