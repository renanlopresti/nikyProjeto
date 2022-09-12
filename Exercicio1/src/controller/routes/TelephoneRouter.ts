import { TelephoneController } from './../TelephoneController';
import express from "express";


export const telephoneRouter = express.Router();

const telephoneController = new TelephoneController();

telephoneRouter.post("/create", telephoneController.createTelephone);
telephoneRouter.get('/getAll', telephoneController.getTelephoneByIdInstructor);
telephoneRouter.get('/getById',telephoneController.getTelephoneById);
telephoneRouter.put('/alter',telephoneController.alterTelephone);
