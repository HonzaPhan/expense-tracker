import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';

class UserController {
	// @desc Auth user/set token
	// @route POST /api/user/auth
	// @access Public
	public static _getUser = asyncHandler(async (req: Request, res: Response) => {
		const { email, password } = req.body;
		res.status(200).json({ message: 'Get user' });
	});

	// @desc Register user
	// @route POST /api/user/register
	// @access Public
	public static _registerUser = asyncHandler(async (req: Request, res: Response) => {
		const { email, password } = req.body;
		res.status(200).json({ message: 'Register User' });
	});

	// @desc Logout user
	// @route POST /api/user/logout
	// @access Public
	public static _logoutUser = asyncHandler(async (req: Request, res: Response) => {
		res.status(200).json({ message: 'Logout User' });
	});

	// @desc Get user profile
	// @route GET /api/user/profile
	// @access Private
	public static _getUserProfile = asyncHandler(async (req: Request, res: Response) => {
		res.status(200).json({ message: 'Get User Profile' });
	});

	// @desc Update user profile
	// @route PUT /api/user/profile
	// @access Private
	public static _updateUserProfile = asyncHandler(async (req: Request, res: Response) => {
		res.status(200).json({ message: 'Update User Profile' });
	});
}

export const { _getUser, _registerUser, _logoutUser, _updateUserProfile, _getUserProfile } = UserController;
