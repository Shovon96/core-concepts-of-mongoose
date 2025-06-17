"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Note = void 0;
const mongoose_1 = require("mongoose");
const noteSchema = new mongoose_1.Schema({
    title: { type: String, require: true, trim: true },
    content: { type: String, default: '' },
    category: { type: String, enum: ['Personal', 'Work', 'Study', 'Other'], default: 'Personal' },
    pinned: { type: Boolean, default: false }
}, {
    versionKey: false
});
exports.Note = (0, mongoose_1.model)("Note", noteSchema);
