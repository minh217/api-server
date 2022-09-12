import { CreateUserDto } from '../dto/create.user.dto';
import { PatchUserDto } from '../dto/patch.user.dto';
import { PutUserDto } from '../dto/put.user.dto';
import shortid from 'shortid';
import debug from 'debug';
import { db } from '../../../common/connection';
const log: debug.IDebugger = debug('app:in-memory-dao');

class UsersDao {
    users: Array<CreateUserDto> = [];

    constructor() {
        log('Create new instance of UserDao');
    }

    async addUser(user: CreateUserDto){
        user.id = shortid.generate();
        db.query(
            'INSERT INTO users(id,email,password,"lastName", "firstName") VALUES($1,$2,$3,$4,$5)', 
            [
                user.id, 
                user.email,
                user.password,
                user.lastName,
                user.firstName
            ]
        )
        return user.id;
    }

    async getUsers() {
        return await db.query('Select * From users');
    }

    async getUserById(userId: string){
        return this.users.find((user: {id: string}) => user.id === userId);
    }

    async putUserById(userId: string, user: PutUserDto){
        const objIndex =this.users.findIndex(
            (obj: {id: string}) => obj.id === userId
        );

        this.users.splice(objIndex, 1, user);
        return `${user.id} update vid put`;
    }

    async patchUserById(userId: string, user: PatchUserDto){
        const objIndex = this.users.findIndex(
            (obj: { id: string }) => obj.id === userId       
        );

        let currentUser: CreateUserDto = this.users[objIndex];
        const allowedPatchFields = [
            'password',
            'firstName',
            'lastName',
            'permissionLevel',
        ];

        for(let field of allowedPatchFields){
            if(field in user){
                currentUser = {...currentUser, [field]: user[field as keyof CreateUserDto]}
            }
        }

        this.users.splice(objIndex, 1, currentUser);
        return `${user.id} patched`;
    }

    async removeUserById(userId: string){
        const objIndex = this.users.findIndex(
            (obj: { id: string }) => obj.id === userId
        );
        this.users.splice(objIndex, 1);
        return `${userId} removed`;
    }

    async getUserByEmail(email: string) {
        const objIndex = this.users.findIndex(
            (obj: { email: string }) => obj.email === email
        );
        let currentUser = this.users[objIndex];
        if (currentUser) {
            return currentUser;
        } else {
            return null;
        }
    }
}


export default new UsersDao;