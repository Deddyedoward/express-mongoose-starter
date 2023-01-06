import express from "express";

abstract class BaseRouter {
    public app: express.Application;

    constructor(app: express.Application) {
        this.app = app;
    }

    abstract routes(): any;
}

export default BaseRouter;