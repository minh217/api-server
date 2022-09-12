import UsersDao from "../repositories/user/dao/users.dao";
import { CRUD } from "../common/crud.inteface";
import { CreateUserDto } from "../repositories/user/dto/create.user.dto"; 
import { PutUserDto } from "../repositories/user/dto/put.user.dto"; 
import { PatchUserDto } from  "../repositories/user/dto/patch.user.dto";

class UsersService implements CRUD {
    create = async (resource: CreateUserDto) => {
        return UsersDao.addUser(resource);
    }
    list = async (limit: number, page: number) => {
        return UsersDao.getUsers();
    }
    
    putById = async (id: string, resource: PutUserDto) => {
        return UsersDao.putUserById(id, resource);
    }

    readById = async (id: string) => {
        return UsersDao.getUserById(id);
    }

    deleteById = async(id: string) => {
        return UsersDao.removeUserById(id);
    }

    async patchById(id: string, resource: PatchUserDto) {
        return UsersDao.patchUserById(id, resource);
    }

    async getUserByEmail(email: string) {
        return UsersDao.getUserByEmail(email);
    }

}

export default new UsersService();