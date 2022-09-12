import { StudantsController } from './../StudantsController';
import express from "express";


export const studantsRouter = express.Router();

const studantsController = new StudantsController();

studantsRouter.post("/create", studantsController.createStudant);
studantsRouter.get('/getAll', studantsController.getAllStudants);
studantsRouter.get('/getAllClass', studantsController.getAllStudantsByClass);
studantsRouter.get('/getById',studantsController.getStudantsById);
studantsRouter.put('/alter',studantsController.alterStudant);
