import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';

// @desc Auth user/set token
// @route POST /api/user/auth
// @access Public
class UserController {
    public static _getUser = asyncHandler(async (req: Request, res: Response) => {
        const { email, password } = req.body;
        res.status(200).json({ email, password });
    })
}

export const { _getUser } = UserController;