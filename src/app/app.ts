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

// Find one specifice note using by ID
app.get('/note/:noteId', async (req: Request, res: Response) => {
    const noteId = req.params.noteId;
    const note = await Note.findById(noteId);

    res.status(201).json({
        success: true,
        message: "Find Specifice Note",
        note
    })
});

// Update one specifice note using by ID
app.patch('/note/:noteId', async (req: Request, res: Response) => {
    const noteId = req.params.noteId;
    const updatedBody = req.body;
    const updatedNote = await Note.findByIdAndUpdate(noteId, updatedBody, { new: true });

    res.status(201).json({
        success: true,
        message: "Note Updated Successfully",
        updatedNote
    })
});

// Update one specifice note using by ID
app.delete('/note/:noteId', async (req: Request, res: Response) => {
    const noteId = req.params.noteId;
    const deletedNote = await Note.findByIdAndDelete(noteId);

    res.status(201).json({
        success: true,
        message: "Note Deleted Successfully",
    })
});


app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to Note Server');
});

export default app;