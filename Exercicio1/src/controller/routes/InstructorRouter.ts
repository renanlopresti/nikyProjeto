import { InstructorController } from './../InstructorController';
import express from "express";


export const instructorRouter = express.Router();

const instructorController = new InstructorController();

instructorRouter.post("/create", instructorController.createInstructor);
instructorRouter.get('/getAll', instructorController.getAllInstructors);
instructorRouter.get('/getById',instructorController.getInstructorById);
instructorRouter.put('/alter',instructorController.alterInstructor);
