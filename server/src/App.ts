import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

class App {
    public _app: any;
	public _port: any;
    private _corsOptions: any;

    constructor() {
        dotenv.config();

        this._app = express();
        this._port = process.env.PORT || 3000;
        this._corsOptions = {
			origin: 'http://localhost:3000',
			optionsSuccessStatus: 200,
			credentials: true,
			methods: 'GET, PUT, POST',
		};

        this._initializeConfig();
    }

    public _start() {
		this._app.listen(this._port, () => {
			console.log(`Server is running on port ${this._port}`);
		});
	}

    private _initializeConfig() {
        
        this._app.use(express.json());
        this._app.use(cors(this._corsOptions));
        this._app.use(express.urlencoded({ extended: true }));
        this._app.use(express.static('public'));
    }
}

export const appInstance = new App();