"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
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
    }
}, {
    versionKey: false
});
exports.User = (0, mongoose_1.model)("User", userSchema);
