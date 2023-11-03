import { NextFunction, Request, Response } from 'express';
import HttpError from '../helpers/HttpError';

class ErrorMiddleware {
	static _handle404Error(req: Request, res: Response, next: NextFunction) {
		const error = new HttpError(404, `Not found - ${req.originalUrl}`);
		next(error);
	}

	static _handleError(error: HttpError, req: Request, res: Response, next: NextFunction) {
		if (error.name === 'CastError' && error.kind === 'ObjectId') {
			res.status(400).json({
				status: 400,
				message: 'Neplatný ID',
			});
		} else {
			const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
			const response = {
				status: statusCode,
				message: error.message || 'Internal Server Error',
				stack: process.env.NODE_ENV === 'production' ? null : error.stack,
			};
			res.status(statusCode).json(response);
		}
	}
}

export default ErrorMiddleware;
