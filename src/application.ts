import express from "express"
import UserRoutes from "./routes/user.routes";

export class Application {
    public app: express.Application;

    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
    }

    protected middlewares() {
        this.app.use(express.json());
    }

    protected routes() {
        new UserRoutes(this.app);
    }

    public start() {
        this.app.listen('8000', () => {
            console.log('running service on port 8001')
        })
    }
}