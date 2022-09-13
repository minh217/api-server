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
}