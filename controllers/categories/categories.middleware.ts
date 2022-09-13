import express from "express";
import categoriesService from "../../services/categories.service";
import {validationResult} from "express-validator";
class CategoryMiddleware{
    async verifyBodyFieldsErros(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ){
        const error = validationResult(req);
        if(!error.isEmpty()){
            return res.status(400).send({error: error.array()});
        }
        next();
    }
    async validateRequiredCategoryBodyFields(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ){
        if(req.body && req.body.code && req.body.name)
        {
            next();
        }else{
            res.status(400).send({
                error: `Missing required fields code and name`
            });
        }
    }

    async validateCodeDoesntExist(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {
        const category = await categoriesService.getCategoryByCode(req.body.code);
        if (category) {
            res.status(400).send({ error: `Category Code already exists` });
        } else {
            next();
        }
    }

    async validateSameCodeDoesntExist(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {
        const category = await categoriesService.getCategorySameCode(req.body.code, Number(req.params.categoryId));
        if (category) {
            res.status(400).send({ error: `Category Code already exists` });
        } else {
            next();
        }
    }

    async validateCategoryExists(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {
        const category = await categoriesService.readById(Number(req.params.categoryId));

        if (category !== null) {
            next();
        } else {
            res.status(404).send({
                error: `Category ${req.params.categoryId} not found`,
            });
        }
    }

    async validRequiredForPatch(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ){
        if(req.body.code || req.body.name)
        {
            next();
        }else{
            res.status(400).send({
                error: `Missing fields`
            });
        }
    }

    async validCategoryHasNews(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ){
        const news = await categoriesService.checkCategoryHaseNews(Number(req.params.categoryId));
        if (news === null) {
            next();
        } else {
            res.status(404).send({
                error: `Category ${req.params.categoryId} has news`,
            });
        }
    }
}

export default new CategoryMiddleware();