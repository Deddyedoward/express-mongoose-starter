import userModel from "../models/user.model";
import { IUserRepository } from "./repository.interface";

class UserRepository implements IUserRepository {

    public async getAllUsers() {
        return await userModel.find({});
    }

}

export default UserRepository;