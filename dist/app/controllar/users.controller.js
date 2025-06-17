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
exports.usersRouter = void 0;
const express_1 = __importDefault(require("express"));
const users_model_1 = require("../models/users.model");
exports.usersRouter = express_1.default.Router();
// Post or Create a single User
exports.usersRouter.post('/create-user', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const user = yield users_model_1.User.create(body);
    res.status(201).json({
        success: true,
        message: 'User created successfully',
        user
    });
}));
// Get all the Users 
exports.usersRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield users_model_1.User.find();
    res.status(201).json({
        success: true,
        message: "All Users Fineded",
        users
    });
}));
// Find one specifice User using by ID
exports.usersRouter.get('/:userId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.params.userId;
    const user = yield users_model_1.User.findById(userId);
    res.status(201).json({
        success: true,
        message: "Find Specifice User",
        user
    });
}));
// Update one specifice user using by ID
exports.usersRouter.patch('/:userId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.params.userId;
    const updatedBody = req.body;
    const updatedUser = yield users_model_1.User.findByIdAndUpdate(userId, updatedBody, { new: true });
    res.status(201).json({
        success: true,
        message: "User Updated Successfully",
        updatedUser
    });
}));
// Delete one specifice user using by ID
exports.usersRouter.delete('/:userId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.params.userId;
    const deletedUser = yield users_model_1.User.findByIdAndDelete(userId);
    res.status(201).json({
        success: true,
        message: "User Deleted Successfully",
    });
}));
