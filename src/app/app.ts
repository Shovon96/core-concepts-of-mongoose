import express, { Application, Request, Response } from 'express';
import { model, Schema } from 'mongoose';

const app: Application = express();

app.use(express.json());

const noteSchema = new Schema({
    title: { type: String, require: true, trim: true },
    content: { type: String, default: '' },
    category: { type: String, enum: ['Personal', 'Work', 'Study', 'Other'], default: 'Personal' },
    pinned: { type: Boolean, default: false }
});

const Note = model("Note", noteSchema);

// Post or Create a single note
app.post('/notes/create-note', async (req: Request, res: Response) => {

    const body = req.body;

    // Approch-1 of creating a data.
    // const myNote = new Note({
    //     title: 'Mongoose', 
    //     content: 'I am learnig deep dive the Mongoose',
    //     category: 'Study',
    // })
    // await myNote.save();


    // Approch-1 of creating a data.
    const note = await Note.create(body)

    res.status(201).json({
        success: true,
        message: 'Note created successfully',
        note
    })

});

// Get all the notes 
app.get('/notes', async (req: Request, res: Response) => {
    const notes = await Note.find()

    res.status(201).json({
        success: true,
        message: "All Note Fineded",
        notes
    })
});

app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to Note Server');
});

export default app;