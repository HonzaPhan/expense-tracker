import { CookieOptions, Response } from 'express';
import jwt from 'jsonwebtoken';

export default class GenerateToken {
	private _cookieOptions: CookieOptions;

	constructor() {
		this._cookieOptions = {
			httpOnly: true,
			secure: process.env.NODE_ENV !== 'development',
			sameSite: 'strict',
            maxAge: 1000 * 60 * 60 * 24,
		};
	}
	public generateToken = (id: string, res: Response) => {
		const token = jwt.sign({ id }, process.env.JWT_SECRET!, {
			expiresIn: '1d',
		});

		res.cookie('jwt', token, this._cookieOptions);
	};
}
