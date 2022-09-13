import express from "express";
import { CommonRoutesConfig } from "../common/common.routes.config"
import CategoriesController from "../controllers/categories/categories.controller";
import CategoriesMiddleware from "../controllers/categories/categories.middleware";

export class CategoryRoutes extends CommonRoutesConfig{

    constructor(app: express.Application){
        super(app, 'UsersRoutes');
    }

    configureRoutes(){
        this.app.route(`/categories`)
        .get(CategoriesController.listCategories)
        .post(
            CategoriesMiddleware.validateRequiredCategoryBodyFields,
            CategoriesMiddleware.validateCodeDoesntExist,
            CategoriesController.createCategory
            );
        this.app.route(`/categories/:categoryId`)
            .all(CategoriesMiddleware.validateCategoryExists)
            .delete(CategoriesController.removeCategory);
        
        this.app.route(`/categories/:categoryId`)
        .put(
            [
                CategoriesMiddleware.validateRequiredCategoryBodyFields,
                CategoriesMiddleware.validateSameCodeDoesntExist,
                CategoriesController.putCategory
            ]
        );

        this.app.patch(`/categories/:categoryId`, 
        [
            CategoriesMiddleware.validateSameCodeDoesntExist,
            CategoriesController.patchCategory
        ])
        return this.app;
    }

}