import { Request, Response } from "express";
import { IUserRepository } from "../repositories/repository.interface";
import { IUserController } from "./controller.interface";

class UserController implements IUserController{
    private repository: IUserRepository

    constructor(repository: IUserRepository) {
        this.repository = repository;
    }

    public index = async (req: Request, res: Response) => {
        const data = this.repository.getAllUsers()
        res.status(200).json(data);
    }
}

export default UserController;