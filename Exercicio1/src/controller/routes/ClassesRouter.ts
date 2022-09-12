import { ClassesController } from './../ClassesController';
import express from "express";


export const classesRouter = express.Router();

const classeController = new ClassesController();

classesRouter.post("/create", classeController.createClass);
classesRouter.get('/getAll', classeController.getAllClasses);
classesRouter.get('/getById',classeController.getClassById);
classesRouter.put('/alter',classeController.alterClass);
