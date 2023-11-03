/* App.ts */

import { Document } from "mongoose";

export interface ICorsOptions {
    origin: string;
    optionsSuccessStatus: number;
    credentials: boolean;
    methods: string;
}

/* Globals.ts */
export interface IDbConfig {
    mongoURI?: string;
}

/* User Model */
export interface IUser extends Document {
    username: string;
    email: string;
    password: string;
}