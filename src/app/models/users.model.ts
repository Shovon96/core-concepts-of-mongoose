import { model, Schema } from "mongoose";
import { IAddress, IUsers } from "../interfaces/users.interface";

const addressSchema = new Schema<IAddress>({
    city: { type: String, required: true },
    zipCode: { type: Number, required: true },
    country: { type: String, required: true }
},
    {
        versionKey: false,
        _id: false
    }
)

const userSchema = new Schema<IUsers>({
    firstName: {
        type: String,
        required: [true, 'The first name is required'],
        minlength: 3,
        maxlength: 12,
        trim: true
    },
    lastName: {
        type: String,
        required: [true, 'The last name is required'],
        minlength: 3,
        maxlength: 12,
        trim: true
    },
    age: {
        type: Number,
        required: [true, 'The age is required'],
        min: 18,
        max: 50
    },
    email: {
        type: String,
        required: [true, 'The email is required'],
        lowercase: true,
        unique: [true, 'The email need to be uniqe'],
        trim: true
    },
    number: {
        type: Number,
        required: [true, 'The number is required'],
        trim: true
    },
    password: {
        type: String,
        required: [true, 'The password is required'],
        validate: {
            validator: function (v) {
                // RegEx: At least one letter, one number, one special character, and min 6 characters
                return /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$#!%*?&]{6,}$/.test(v);
            },
            message: props => `${props.value} is not a strong enough password!`
        }
    },
    role: {
        type: String,
        enum: ['USER', 'ADMIN', 'SUPERADMIN'],
        uppercase: true,
        default: 'USER'
    },
    address: {
        type: addressSchema,
        required: true
    }
},
    {
        versionKey: false
    }
);

export const User = model("User", userSchema);