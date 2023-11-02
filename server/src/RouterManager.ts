import AuthMiddleware from "./middlewares/AuthMiddleware";
import { Request, Response } from "express";
import { Router } from "express";

export default class RouterManager {
    private _userRouter: Router;
    private _publicRouter: Router;

    public constructor() {
        this._userRouter = Router();
        this._publicRouter = Router();
        this._initializeRoutes()
    }

    public get UserRouter() {
        return this._userRouter;
    }

    public get PublicRouter() {
        return this._publicRouter;
    }

    private _initializeRoutes() {
        this._userRouter.get('/', (req: Request, res: Response) => {
            res.send('User Route');
        })

        this._publicRouter.use('/user', this._userRouter)
    }
}