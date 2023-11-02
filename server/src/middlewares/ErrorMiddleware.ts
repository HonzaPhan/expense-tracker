import { NextFunction, Request, Response } from 'express';
import HttpError from '../helpers/HttpError';

class ErrorMiddleware {
	static _handle404Error(req: Request, res: Response, next: NextFunction) {
		const error = new HttpError(404, `Not found - ${req.originalUrl}`);
		next(error);
	}

	static _handleError(error: HttpError, req: Request, res: Response, next: NextFunction) {
		let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
		const { message, name, kind, stack } = error;

		if (name === 'CastError' && kind === 'ObjectId') {
			res.status(400).json({
				status: 400,
				message: 'Invalid ID',
			});
		} else {
			res.status(statusCode).json({
				status: statusCode,
				message: message || 'Internal Server Error',
				stack: process.env.NODE_ENV === 'production' ? null : stack,
			});
		}
	}
}

export default ErrorMiddleware;