import express from 'express';
import usersService from '../../services/users.service';
import * as argon2 from 'argon2';

import debug from 'debug';

const log: debug.IDebugger = debug('app:users-controller');

class UsersController {
    async listUsers(req: express.Request, res: express.Response){
        const users = await usersService.list(100, 0);
        res.status(200).send(users);
    }

    async getUserById(req: express.Request, res: express.Response){ 
        const user = await usersService.readById(req.body.id);
        res.status(200).send(user);
    }

    async createUser(req: express.Request, res: express.Response){
        req.body.password = await argon2.hash(req.body.password);
        const userId = await usersService.create(req.body);
        res.status(201).send({ id: userId });
    }

    async patch(req: express.Request, res: express.Response){
        if(req.body.password){
            req.body.password = await argon2.hash(req.body.password);
        }

        log(await usersService.patchById(req.params.userId, req.body));
        res.status(204).send();
    }

    async put(req: express.Request, res: express.Response) {
        let result = await usersService.putById({...req.body, id: req.params.userId});
        res.status(result.status).send(result.message);
    }

    async removeUser(req: express.Request, res: express.Response) {
        log(await usersService.deleteById(req.body.id));
        res.status(204).send();
    }
}

export default new UsersController();