import { Router } from 'express';
import {
	_getUser,
	_registerUser,
	_logoutUser,
	_updateUserProfile,
	_getUserProfile,
} from './controllers/user/controller';
import AuthMiddleware from './middlewares/AuthMiddleware';

export default class RouterManager {
	private _userRouter: Router;
	private _publicRouter: Router;

	constructor() {
		this._userRouter = Router();
		this._publicRouter = Router();
		this._initializeRoutes();
	}

	public get UserRouter() {
		return this._userRouter;
	}

	public get PublicRouter() {
		return this._publicRouter;
	}

	private _initializeRoutes() {
		this._userRouter
			.post('/auth', _getUser)
			.post('/register', _registerUser)
			.post('/logout', _logoutUser)
			.get('/profile', AuthMiddleware._protect, _getUserProfile)
			.put('/profile', AuthMiddleware._protect, _updateUserProfile);

		this._publicRouter.use('/user', this._userRouter);
	}
}
