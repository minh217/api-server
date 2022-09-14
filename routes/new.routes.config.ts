import { CommonRoutesConfig } from "../common/common.routes.config";
import NewsController from "../controllers/news/news.controller";
import express from "express";
import NewsMiddleware from "../controllers/news/news.middleware";
import { body } from "express-validator";
export class NewsRoutes extends CommonRoutesConfig{
    constructor(app: express.Application){
        super(app, "NewRoutes");
    }

    configureRoutes(){
        this.app.get('/news', [
            NewsController.listNews
        ]);

        this.app.post('/news',[
            body('category_id').isNumeric().withMessage("category_id should be number"),
            body('category_id').custom((value) => {
                if(Number(value) <= 0)
                {
                    return false
                }
            }).withMessage("category_id should greater than zero"),
            body('title').isString().withMessage('title, content should be string'),
            body('content').isString().withMessage('code should be string'),
            body([
                    'title',
                    'content'
                ]).notEmpty().withMessage('title or content is empty'),
            NewsMiddleware.verifyBodyFieldsErros,
            NewsController.createNew
        ])

        this.app.put(`/news:newId`, [
            NewsMiddleware.newIsNotFound,
            NewsMiddleware.categoryIsNotFound,
            body('category_id').isNumeric().withMessage("category_id should be number"),
            body('category_id').custom((value) => {
                if(Number(value) <= 0)
                {
                    return false
                }
            }).withMessage("category_id should greater than zero"),
            body('title').isString().withMessage('title, content should be string'),
            body('content').isString().withMessage('code should be string'),
            body([
                    'title',
                    'content'
                ]).notEmpty().withMessage('title or content is empty'),
            NewsMiddleware.verifyBodyFieldsErros,
            NewsController.putNew
        ])
        return this.app;
    }
}