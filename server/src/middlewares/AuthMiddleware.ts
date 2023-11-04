import jwt, { JwtPayload } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import UserModel from '../controllers/user/model';
import asyncHandler from 'express-async-handler';
import { IUser } from '../helpers/Types';


export default class AuthMiddleware {
	private static userModel = UserModel.GetUserModel;

	public static _protect = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
		const token = req.cookies.jwt;

		if (!token) {
			res.status(401);
			return next(new Error('Neplatný token!'));
		}

		try {
			const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;
			const user: IUser = await AuthMiddleware.userModel.findById(decoded.id).select('-password');

			if (!user) {
				res.status(401);
				return next(new Error('Uživatel neexistuje!'));
			}

			req.user = user;
			next();
		} catch (error) {
			res.status(401);
			next(error);
		}
	});
}
