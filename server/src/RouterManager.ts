import { Router } from 'express';
import {
	_getUser,
	_registerUser,
	_logoutUser,
	_updateUserProfile,
	_getUserProfile,
} from './controllers/user/controller';
import AuthMiddleware from './middlewares/AuthMiddleware';
import { _getExpense } from './controllers/expense/controller';

export default class RouterManager {
	private _userRouter: Router;
	private _expenseRouter: Router;
	private _publicRouter: Router;

	constructor() {
		this._userRouter = Router();
		this._expenseRouter = Router();
		this._publicRouter = Router();
		this._initializeRoutes();
	}

	public get UserRouter() {
		return this._userRouter;
	}

	public get ExpenseRouter() {
		return this._expenseRouter;
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
		this._expenseRouter.get('/', AuthMiddleware._protect, _getExpense);

		this._publicRouter.use('/user', this._userRouter);
		this._publicRouter.use('/expense', AuthMiddleware._protect, this._expenseRouter);
	}
}
