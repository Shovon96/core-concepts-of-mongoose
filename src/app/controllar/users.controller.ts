import express, { Request, Response } from 'express';
import { User } from '../models/users.model';

export const usersRouter = express.Router()

// Post or Create a single User
usersRouter.post('/create-user', async (req: Request, res: Response) => {
    const body = req.body;
    const user = await User.create(body)

    res.status(201).json({
        success: true,
        message: 'User created successfully',
        user
    })

});

// Get all the Users 
usersRouter.get('/', async (req: Request, res: Response) => {
    const users = await User.find()

    res.status(201).json({
        success: true,
        message: "All Users Fineded",
        users
    })
});

// Find one specifice User using by ID
usersRouter.get('/:userId', async (req: Request, res: Response) => {
    const userId = req.params.userId;
    const user = await User.findById(userId);

    res.status(201).json({
        success: true,
        message: "Find Specifice User",
        user
    })
});

// Update one specifice user using by ID
usersRouter.patch('/:userId', async (req: Request, res: Response) => {
    const userId = req.params.userId;
    const updatedBody = req.body;
    const updatedUser = await User.findByIdAndUpdate(userId, updatedBody, { new: true });

    res.status(201).json({
        success: true,
        message: "User Updated Successfully",
        updatedUser
    })
});

// Delete one specifice user using by ID
usersRouter.delete('/:userId', async (req: Request, res: Response) => {
    const userId = req.params.userId;
    const deletedUser = await User.findByIdAndDelete(userId);

    res.status(201).json({
        success: true,
        message: "User Deleted Successfully",
    })
});

