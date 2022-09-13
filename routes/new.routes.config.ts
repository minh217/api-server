import { CommonRoutesConfig } from "../common/common.routes.config";
import express from "express";
export class NewRoutes extends CommonRoutesConfig{
    constructor(app: express.Application){
        super(app, "NewRoutes");
    }

    configureRoutes(){
        this.app.post('/news', [
            NewsController.createNews
        ]);
        return this.app;
    }
}