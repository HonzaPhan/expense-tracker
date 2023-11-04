import { Response, CookieOptions } from 'express';
import jwt from 'jsonwebtoken';

export default class GenerateToken {
	public generateToken = (res: Response, id: string) => {
		const token = jwt.sign({ id }, process.env.JWT_SECRET!, {
			expiresIn: '1d',
		});

		const cookieOptions: CookieOptions = {
			httpOnly: true,
			secure: process.env.NODE_ENV !== 'development',
			sameSite: 'strict',
			maxAge: 1000 * 60 * 60 * 24,
		  };

		res.cookie('jwt', token, cookieOptions);
	};
}
