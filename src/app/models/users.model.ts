import { model, Schema } from "mongoose";
import { IUsers } from "../interfaces/users.interface";

const userSchema = new Schema<IUsers>({
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    number: { type: Number, required: true, trim: true },
    password: { type: String, required: true },
    role: { type: String, default: 'user' }
},
    {
        versionKey: false
    }
);

export const User = model("User", userSchema);