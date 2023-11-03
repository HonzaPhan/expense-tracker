import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import UserModel from './model';

class UserController {
	static _userModel: UserModel;

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
		const { username, email, password } = req.body;

		const userExists = await this._userModel.GetUserModel.findOne({ email });

		if (userExists) {
			res.status(400);
			throw new Error('Uživatel již existuje!');
		}

		const user = await this._userModel.GetUserModel.create({
			username,
			email,
			password,
		});

		if(user) {
			res.status(201).json({
				_id: user._id,
				username: user.username,
				email: user.email,
				password: user.password,
			});
		} else {
			res.status(400);
			throw new Error('Neplatná uživatelská data');
		}

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
