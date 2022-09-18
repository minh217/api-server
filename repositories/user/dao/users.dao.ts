import { CreateUserDto } from '../dto/create.user.dto';
import { PatchUserDto } from '../dto/patch.user.dto';
import { PutUserDto } from '../dto/put.user.dto';
import shortid from 'shortid';
import debug from 'debug';
import { db } from '../../../common/connection';
import { CommonMessages } from '../../../common/messages/common.messages';
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
        return await db.query(`Select * From users where id = '${userId}'`);
    }

    async putUserById(userId: string, user: PutUserDto){
        let result = CommonMessages.updateSuccessfully
        await db.query('UPDATE users SET "firstName" = $2, "lastName" = $3, "permissionLevel" = $4 WHERE id = $1',
        [
            userId,
            user.firstName,
            user.lastName,
            user.permissionLevel
        ]
        ).catch((error) => { console.log(error); result = CommonMessages.serverError ;});
        return result;
    }

    async patchUserById(userId: string, user: PatchUserDto){
        const objIndex = this.users.findIndex(
            (obj: { id: string }) => obj.id === userId
        );

        let currentUser: CreateUserDto = this.users[objIndex];
        const allowedPatchFields = [
            'email',
            'firstName',
            'lastName',
            'permissionLevel',
        ];

        for(let field of allowedPatchFields){
            if(field in user){
                currentUser = {...currentUser, [field]: user[field as keyof PutUserDto]}
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