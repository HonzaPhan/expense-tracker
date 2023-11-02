import express, { Express } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import RouterManager from './RouterManager';
import bodyParser from 'body-parser';
import { ICorsOptions } from './helpers/Types';

class App {
	public _app: Express;
	public _port: number | string;
	private _corsOptions: ICorsOptions;
    private _routesManager: any;

	constructor() {
		dotenv.config();

		this._app = express();
		this._port = process.env.PORT || 3000;
		this._routesManager = new RouterManager();
		this._corsOptions = {
			origin: 'http://localhost:5173/',
			optionsSuccessStatus: 200,
			credentials: true,
			methods: 'GET, PUT, POST',
		};

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
    }

	private _initializeConfig() {
		this._app.use(express.json());
		this._app.use(cors(this._corsOptions));
		this._app.use(express.urlencoded({ extended: true }));
		this._app.use(express.static('public'));
		this._app.use(bodyParser.json());
	}
}

export const appInstance = new App();
