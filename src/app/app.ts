import express, { Application, Request, Response } from 'express';
import { model, Schema } from 'mongoose';

const app: Application = express();

const noteSchema = new Schema({
    title: { type: String, require: true, trim: true },
    content: { type: String, default: '' },
    category: { type: String, enum: ['Personal', 'Work', 'Study', 'Other'], default: 'Personal' },
    pinned: { type: Boolean, default: false }
});

const Note = model("Note", noteSchema);

app.post('/create-note', async (req: Request, res: Response) => {
    const myNote = new Note({
        title: 'Mongoose', 
        content: 'I am learnig deep dive the Mongoose',
        category: 'Study',
    })

    await myNote.save();

    res.status(201).json({
        success: true,
        message: 'Note created successfully',
        note: myNote
    })

});

app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to Note Server');
});

export default app;