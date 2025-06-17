import express, { Application, Request, Response } from 'express';
import { notesRouter } from './controllar/notes.controller';
import { usersRouter } from './controllar/users.controller';

const app: Application = express();

app.use(express.json());

app.use('/notes', notesRouter);
app.use('/users', usersRouter);


app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to Note Server');
});

export default app;