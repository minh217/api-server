import express from "express";
import NewsService from "../../services/news.service";
class NewsController {
    listNews = async(
        req: express.Request,
        res: express.Response
    ) => {
        let result = await NewsService.list(100, 0);
        res.status(200).send(result);
    }
    createNew =  async (
        req: express.Request,
        res: express.Response
    ) => {
        let result = await NewsService.create({
            title: req.body.title,
            content: req.body.content,
            category_id: Number(req.body.category_id),
            created_by: req.body.created_by
        });
        res.status(result.status).send(result.message);
    }
    putNew = async(
        req: express.Request,
        res: express.Response
    ) => {
        let result = await NewsService.putById({
            title: req.body.title,
            content: req.body.content,
            category_id: req.body.category_id,
            id: Number(req.params.newId)
        });
        res.status(result.status).send(result.message);
    }
    getById = async (
        req: express.Request,
        res: express.Response
    ) => {
        let result = await NewsService.readById(Number(req.params.newId));
        res.status(200).send(result);

    }
    patchNew = async (
        req: express.Request,
        res:express.Response
    ) => {
        let result = await NewsService.patchById(Number(req.params.newId), req.body);
        res.status(result.status).send(result.message);
    }

    getNewsByCategoryId = async (
        req: express.Request,
        res: express.Response,
    ) => {
        let result =  await NewsService.getNewsByCategoryId(Number(req.params.categoryId));
        res.status(200).send(result);
    }
    deleteNew = async(
        req: express.Request,
        res: express.Response
    ) => {
        let result = await NewsService.deleteById(Number(req.params.newId));
        res.status(result.status).send(result.message);
    }
}

export default new NewsController();