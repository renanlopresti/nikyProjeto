import { Telephone, TelephoneInputDTO } from './../business/entities/telephone';
import { TelephoneBusiness } from './../business/TelephoneBusiness';
import { Request, Response } from "express";
import { CustomError } from "../business/error/CustomError";
import { TelephoneDatabase } from '../data/TelephoneDataBase';


const telephoneBusiness = new TelephoneBusiness(
    new TelephoneDatabase()
);


export class TelephoneController {

    async createTelephone(req: Request, res: Response) {
        try {
            const input: TelephoneInputDTO = {
                phoneNumber: req.body.phoneNumber,
                responsable: req.body.responsable,
                idInstructor: req.body.idInstructor
            }
            if (
                !input.phoneNumber ||
                !input.idInstructor
            ) {
                throw new CustomError(404, "Faltou algum elemento")
            }

            await telephoneBusiness.createTelephone(input);

            res.status(200).send({ message: 'Telefone criado com sucesso' });

        } catch (error) {
            res
                .status(error.statusCode || 400)
                .send({ error: error.message });
        }
    }

    async getTelephoneByIdInstructor(req: Request, res: Response) {
        try {

            const id: number = Number(req.query.id);

            const result: Telephone[] = await telephoneBusiness.getAllTelephoneByIdInstructor(id);

            res.status(200).send({ result });

        } catch (error) {
            res
                .status(error.statusCode || 400)
                .send({ error: error.message });
        }
    }

    async getTelephoneById(req: Request, res: Response) {
        try {

            const id: number = Number(req.query.id);

            const result: Telephone = await telephoneBusiness.getTelephoneById(id);

            res.status(200).send({ result });

        } catch (error) {
            res
                .status(error.statusCode || 400)
                .send({ error: error.message });
        }
    }

    async alterTelephone(req: Request, res: Response) {
        try {
            const input: Telephone = {
                id: req.body.id,
                phoneNumber: req.body.phoneNumber,
                responsable: req.body.responsable,
                idInstructor: req.body.idInstructor
            }
            if (
                !input.id ||
                !input.phoneNumber ||
                !input.responsable ||
                !input.idInstructor
            ) {
                throw new CustomError(404, "Faltou algum elemento")
            }

            await telephoneBusiness.alterTelephone(input);

            res.status(200).send({ message: 'Telefone alterado' });

        } catch (error) {
            res
                .status(error.statusCode || 400)
                .send({ error: error.message });
        }
    }
}