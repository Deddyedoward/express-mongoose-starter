import { Request, Response } from "express";

export interface IUserController {
    index(req: Request, res: Response): any
}