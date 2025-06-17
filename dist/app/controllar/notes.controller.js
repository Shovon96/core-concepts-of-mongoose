"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.notesRouter = void 0;
const express_1 = __importDefault(require("express"));
const notes_model_1 = require("../models/notes.model");
exports.notesRouter = express_1.default.Router();
// Post or Create a single note
exports.notesRouter.post('/create-note', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    // Approch-1 of creating a data.
    // const myNote = new Note({
    //     title: 'Mongoose', 
    //     content: 'I am learnig deep dive the Mongoose',
    //     category: 'Study',
    // })
    // await myNote.save();
    // Approch-1 of creating a data.
    const note = yield notes_model_1.Note.create(body);
    res.status(201).json({
        success: true,
        message: 'Note created successfully',
        note
    });
}));
// Get all the notes 
exports.notesRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const notes = yield notes_model_1.Note.find();
    res.status(201).json({
        success: true,
        message: "All Note Fineded",
        notes
    });
}));
// Find one specifice note using by ID
exports.notesRouter.get('/:noteId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const noteId = req.params.noteId;
    const note = yield notes_model_1.Note.findById(noteId);
    res.status(201).json({
        success: true,
        message: "Find Specifice Note",
        note
    });
}));
// Update one specifice note using by ID
exports.notesRouter.patch('/:noteId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const noteId = req.params.noteId;
    const updatedBody = req.body;
    const updatedNote = yield notes_model_1.Note.findByIdAndUpdate(noteId, updatedBody, { new: true });
    res.status(201).json({
        success: true,
        message: "Note Updated Successfully",
        updatedNote
    });
}));
// Delete one specifice note using by ID
exports.notesRouter.delete('/:noteId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const noteId = req.params.noteId;
    const deletedNote = yield notes_model_1.Note.findByIdAndDelete(noteId);
    res.status(201).json({
        success: true,
        message: "Note Deleted Successfully",
    });
}));
