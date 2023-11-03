import express, { Express } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import RouterManager from './RouterManager';
import ErrorMiddleware from './middlewares/ErrorMiddleware';
import DBConnect from './config/globals';
import cookieParser from 'cookie-parser';
import { ICorsOptions } from './helpers/Types';

class App {
	public _app: Express;
	public _port: number | string;
	private _corsOptions: ICorsOptions;
	private _connection: DBConnect = new DBConnect();
    private _routesManager: RouterManager;

	constructor() {
		dotenv.config();

		this._app = express();
		this._port = process.env.PORT || 3000;
		this._routesManager = new RouterManager();
		this._corsOptions = {
			origin: 'http://localhost:5173',
			optionsSuccessStatus: 200,
			credentials: true,
			methods: 'GET, PUT, POST',
		};

		this._connection.getMongoConnection();
		this._initializeConfig();
        this._initializeRoutes();
	}

	public _start() {
		this._app.listen(this._port, () => {
			console.log(`Server is running on port ${this._port}`);
		});
	}

    private _initializeRoutes() {
        this._app.use('/api', this._routesManager.PublicRouter);
		this._app.use(ErrorMiddleware._handle404Error, ErrorMiddleware._handleError);
    }

	private _initializeConfig() {
		this._app.use(cors(this._corsOptions));
		this._app.use(cookieParser());
		this._app.use(express.static('public'));
		this._app.use(express.urlencoded({ extended: true }));
		this._app.use(express.json());
	}
}

export const appInstance = new App();
