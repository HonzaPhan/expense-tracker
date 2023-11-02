export default class HttpError extends Error {
    status: number;
    kind?: string;

    constructor(status: number, message: string) {
        super(message);
        this.status = status;
    }
}