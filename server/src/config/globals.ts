import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { IDbConfig } from '../helpers/Types';

export default class DBConnect {
	private _dbConfig: IDbConfig;

	constructor() {
		dotenv.config();

		this._dbConfig = {
			mongoURI: process.env.MONGO_URI,
		};
	}

	private _dbConnect = async () => {
		try {
			const conn = await mongoose.connect(this._dbConfig.mongoURI as string);

			console.log(`MongoDB Connected: ${conn.connection.host}`);
		} catch (error: unknown) {
			if (error instanceof Error) {
				console.error(`Error: ${error.message}`);
				process.exit(1);
			}
		}
	};

	public get getMongoConnection() {
		if (this._dbConnect) {
			return this._dbConnect;
		} else {
			throw new Error('MongoDB connection has not been established.');
		}
	}
}
