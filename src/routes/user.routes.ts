import express from "express";
import { IUserController } from "../controllers/controller.interface";
import UserController from "../controllers/users.controller";
import UserRepository from "../repositories/users.repository";
import BaseRouter from "./base.router";

class UserRoutes extends BaseRouter {
    private controller: IUserController;

    constructor(app: express.Application) {
        super(app);
        this.controller = new UserController(new UserRepository());
        // call routes
        this.routes();
    }

    public async routes(): Promise<void> {
        this.app.get('/', this.controller.index);
    }    
}

export default UserRoutes;