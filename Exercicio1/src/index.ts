import { telephoneRouter } from './controller/routes/TelephoneRouter';
import { studantsRouter } from './controller/routes/StudantsRouter';
import { instructorRouter } from './controller/routes/InstructorRouter';
import { classesRouter } from './controller/routes/ClassesRouter';
import cors from "cors";
import express from "express";
import { AddressInfo } from "net";

const PORT = process.env.PORT

const app = express();

app.use(cors());

app.use(express.json());

app.use("/studants", studantsRouter);
app.use("/telephones", telephoneRouter);
app.use("/instructors", instructorRouter);
app.use("/classes", classesRouter);

const server = app.listen(PORT, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Servidor rodando em http://localhost:${address.port}`);
    } else {
        console.error(`Falha ao rodar o servidor.`);
    }
});

