import { CommonRoutesConfig } from "../common/common.routes.config";
import express from 'express';
import UsersMiddleware from "../controllers/user/users.middleware";
import UsersController from "../controllers/user/users.controllers";
export class UsersRoutes extends CommonRoutesConfig{
    constructor(app: express.Application){
        super(app, 'UsersRoutes');
    }

    configureRoutes(){
        this.app.route(`/users`)
        .get(UsersController.listUsers)
        .post(
            UsersMiddleware.validateRequiredUserBodyFields,
            UsersMiddleware.validateSameEmailDoesntExist,
            UsersController.createUser
        );

        this.app.param(`userId`, UsersMiddleware.extractUserId);
        
        this.app
            .route(`/users/:userId`)
            .all(UsersMiddleware.validateUserExists)
            .get(UsersController.getUserById)
            .delete(UsersController.removeUser);

        this.app.put(`/users/:userId`, [
            UsersController.put,
        ]);

        this.app.patch(`/users/:userId`, [
            UsersMiddleware.validatePatchEmail,
            UsersController.patch,
        ]);

        return this.app;
    }
}