export interface ICorsOptions {
    origin: string;
    optionsSuccessStatus: number;
    credentials: boolean;
    methods: string;
}

export interface IDbConfig {
    mongoURI?: string;
}