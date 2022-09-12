import { Studants, StudantsInputDTO } from './../business/entities/studants';
import { StudantsDatabase } from './../data/StudantsDataBase';
import { StudantsBusiness } from './../business/StudantsBusiness';
import { Request, Response } from "express";
import { CustomError } from "../business/error/CustomError";

const studantsBusiness = new StudantsBusiness(
    new StudantsDatabase()
);


export class StudantsController {

    async createStudant(req: Request, res: Response) {
        try {
            const input: StudantsInputDTO = {
                codeRegistry: req.body.codeRegistry,
                dateRegistry: req.body.dateRegistry,
                nameStudant: req.body.nameStudant,
                address: req.body.address,
                phoneNumber: req.body.phoneNumber,
                birthDate: req.body.birthDate,
                height: req.body.height,
                presence: req.body.presence,
                privation: req.body.privation,
                idClasses: req.body.idClasses,
                HallMonitor: req.body.HallMonitor
            }
            if (
                !input.codeRegistry ||
                !input.dateRegistry ||
                !input.nameStudant ||
                !input.address ||
                !input.phoneNumber ||
                !input.birthDate ||
                !input.height ||
                !input.presence ||
                !input.privation ||
                !input.idClasses
            ) {
                throw new CustomError(404, "Faltou algum elemento")
            }

            if (!input.HallMonitor) {
                input.HallMonitor = false;
            }

            await studantsBusiness.createStudant(input);

            res.status(200).send({ message: 'Estudante criado com sucesso' });

        } catch (error) {
            res
                .status(error.statusCode || 400)
                .send({ error: error.message });
        }
    }

    async getStudantsById(req: Request, res: Response) {
        try {

            const id: number = Number(req.query.id);

            const result: Studants = await studantsBusiness.getStudantById(id);

            res.status(200).send({ result });

        } catch (error) {
            res
                .status(error.statusCode || 400)
                .send({ error: error.message });
        }
    }

    async getAllStudantsByClass(req: Request, res: Response) {
        try {

            const id: number = Number(req.query.id);
            if (!id) {
                throw new CustomError(404, "Faltou algum elemento")
            }

            const result: Studants[] = await studantsBusiness.getAllStudantsByClass(id);

            res.status(200).send({ result });

        } catch (error) {
            res
                .status(error.statusCode || 400)
                .send({ error: error.message });
        }
    }


    async getAllStudants(req: Request, res: Response) {
        try {

            const result: Studants[] = await studantsBusiness.getAllStudants();

            res.status(200).send({ result });

        } catch (error) {
            res
                .status(error.statusCode || 400)
                .send({ error: error.message });
        }
    }

    async alterStudant(req: Request, res: Response) {
        try {
            const input: Studants = {
                id: req.body.id,
                codeRegistry: req.body.codeRegistry,
                dateRegistry: req.body.dateRegistry,
                nameStudant: req.body.nameStudant,
                address: req.body.address,
                phoneNumber: req.body.phoneNumber,
                birthDate: req.body.birthDate,
                height: req.body.height,
                presence: req.body.presence,
                privation: req.body.privation,
                idClasses: req.body.idClasses,
                HallMonitor: req.body.HallMonitor
            }
            if (
                !input.id ||
                !input.codeRegistry ||
                !input.dateRegistry ||
                !input.nameStudant ||
                !input.address ||
                !input.phoneNumber ||
                !input.birthDate ||
                !input.height ||
                !input.presence ||
                !input.privation ||
                !input.idClasses
            ) {
                throw new CustomError(404, "Faltou algum elemento")
            }

            if (!input.HallMonitor) {
                input.HallMonitor = false;
            }

            await studantsBusiness.alterStudant(input);

            res.status(200).send({ message: 'Estudante alterado' });

        } catch (error) {
            res
                .status(error.statusCode || 400)
                .send({ error: error.message });
        }
    }
}