import express from 'express';
import {validationResult} from 'express-validator';
import CategoriesService from '../../services/categories.service';
import NewsService from '../../services/news.service';
class NewsMiddleware {
    verifyBodyFieldsErros = async (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) => {
        const error = validationResult(req);
        if(!error.isEmpty())
        {
            return res.status(400).send({error: error.array()});
        }
        next();
    }
    newIsNotFound = async (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) => {
        let ob = await NewsService.readById(Number(req.params.newId));
        if(ob === null){
            res.status(404).send("New Is Not Found");
        }else{
            next();
        }
    }

    categoryIsNotFound = async (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) => {
        let category = await CategoriesService.readById(Number(req.params.categoryId));
        if(category === null){
            res.status(404).send("Category Is Not Found");
        }else{
            next();
        }
    }

    validPatchField = async (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) => {
        if(req.body.title || req.body.content || req.body.images || req.body.category_id)
        {
            next();
        }else{
            res.status(400).send("Invalid Field");
        }
    }
}

export default new NewsMiddleware();