import express, { Request, Response } from 'express';
import { Note } from '../models/notes.model';

export const notesRouter = express.Router()

// Post or Create a single note
notesRouter.post('/create-note', async (req: Request, res: Response) => {

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
notesRouter.get('/', async (req: Request, res: Response) => {
    const notes = await Note.find().populate("user")

    res.status(201).json({
        success: true,
        message: "All Note Fineded",
        notes
    })
});

// Find one specifice note using by ID
notesRouter.get('/:noteId', async (req: Request, res: Response) => {
    const noteId = req.params.noteId;
    const note = await Note.findById(noteId);

    res.status(201).json({
        success: true,
        message: "Find Specifice Note",
        note
    })
});

// Update one specifice note using by ID
notesRouter.patch('/:noteId', async (req: Request, res: Response) => {
    const noteId = req.params.noteId;
    const updatedBody = req.body;
    const updatedNote = await Note.findByIdAndUpdate(noteId, updatedBody, { new: true });

    res.status(201).json({
        success: true,
        message: "Note Updated Successfully",
        updatedNote
    })
});

// Delete one specifice note using by ID
notesRouter.delete('/:noteId', async (req: Request, res: Response) => {
    const noteId = req.params.noteId;
    const deletedNote = await Note.findByIdAndDelete(noteId);

    res.status(201).json({
        success: true,
        message: "Note Deleted Successfully",
    })
});

