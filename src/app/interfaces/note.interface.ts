import { Types } from "mongoose";

export interface INote {
    title: String,
    content: String,
    category: 'Personal' | 'Work' | 'Study' | 'Other',
    pinned: Boolean,
    user: Types.ObjectId
}