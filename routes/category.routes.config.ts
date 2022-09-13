import express from "express";
import { CommonRoutesConfig } from "../common/common.routes.config"
import CategoriesController from "../controllers/categories/categories.controller";
import CategoriesMiddleware from "../controllers/categories/categories.middleware";
import {body} from 'express-validator';
export class CategoryRoutes extends CommonRoutesConfig{

    constructor(app: express.Application){
        super(app, 'UsersRoutes');
    }

    configureRoutes(){
        this.app.route(`/categories`)
        .get(CategoriesController.listCategories)
        .post(
            [
                body('name').isString().withMessage('name should be string'),
                body('code').isString().withMessage('code should be string'),
                body([
                    'name',
                    'code'
                ]).notEmpty().withMessage('name or code is empty'),
                CategoriesMiddleware.verifyBodyFieldsErros,
                CategoriesMiddleware.validateCodeDoesntExist,
                CategoriesController.createCategory
            ]
        );

        this.app.route(`/categories/:categoryId`)
            .all(CategoriesMiddleware.validateCategoryExists)
            .get(CategoriesController.getCategoryById)
            .delete(
                [
                    CategoriesMiddleware.validCategoryHasNews,
                    CategoriesController.removeCategory
                ]
            );
        
        this.app.route(`/categories/:categoryId`)
        .put(
            [
                body('name').isString().withMessage('name should be string'),
                body('code').isString().withMessage('code should be string'),
                body([
                    'name',
                    'code'
                ]).notEmpty().withMessage('name or code is empty'),
                CategoriesMiddleware.validateSameCodeDoesntExist,
                CategoriesController.putCategory
            ]
        );

        this.app.patch(`/categories/:categoryId`, 
        [
            CategoriesMiddleware.validRequiredForPatch,
            CategoriesMiddleware.validateSameCodeDoesntExist,
            CategoriesController.patchCategory
        ])
        return this.app;
    }

}