import { model, Schema, version } from "mongoose";
import { INote } from "../interfaces/note.interface";

const noteSchema = new Schema<INote>({

    title: { type: String, require: true, trim: true },
    content: { type: String, default: '' },
    category: { type: String, enum: ['Personal', 'Work', 'Study', 'Other'], default: 'Personal' },
    pinned: { type: Boolean, default: false }

},
    {
        versionKey: false
    }

);

export const Note = model("Note", noteSchema);