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
const express_1 = __importDefault(require("express"));
const mongoose_1 = require("mongoose");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const noteSchema = new mongoose_1.Schema({
    title: { type: String, require: true, trim: true },
    content: { type: String, default: '' },
    category: { type: String, enum: ['Personal', 'Work', 'Study', 'Other'], default: 'Personal' },
    pinned: { type: Boolean, default: false }
});
const Note = (0, mongoose_1.model)("Note", noteSchema);
// Post or Create a single note
app.post('/notes/create-note', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    // Approch-1 of creating a data.
    // const myNote = new Note({
    //     title: 'Mongoose', 
    //     content: 'I am learnig deep dive the Mongoose',
    //     category: 'Study',
    // })
    // await myNote.save();
    // Approch-1 of creating a data.
    const note = yield Note.create(body);
    res.status(201).json({
        success: true,
        message: 'Note created successfully',
        note
    });
}));
// Get all the notes 
app.get('/notes', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const notes = yield Note.find();
    res.status(201).json({
        success: true,
        message: "All Note Fineded",
        notes
    });
}));
app.get('/', (req, res) => {
    res.send('Welcome to Note Server');
});
exports.default = app;
