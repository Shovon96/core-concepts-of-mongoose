"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const notes_controller_1 = require("./controllar/notes.controller");
const users_controller_1 = require("./controllar/users.controller");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/notes', notes_controller_1.notesRouter);
app.use('/users', users_controller_1.usersRouter);
app.get('/', (req, res) => {
    res.send('Welcome to Note Server');
});
exports.default = app;
