import express from "express";
import CategoriesService from "../../services/categories.service";
class CategoriesController {
    listCategories = async (req: express.Request, res: express.Response) => {
        const categories = await CategoriesService.list(100, 0);
        res.status(200).send(categories);
    };
    getCategoryById = async (req: express.Request, res: express.Response) => {
        const category = await CategoriesService.readById(req.body.id);
        res.status(200).send(category);
    }
    createCategory = async (req: express.Request, res: express.Response) => {
        let result = await CategoriesService.create(req.body);
        res.status(result.status).send(result.message);
    }
    putCategory = async (req: express.Request, res: express.Response) => {
        let result = await CategoriesService.putById({...req.body, id: req.params.categoryId});
        res.status(result.status).send(result.message);
    }
    removeCategory = async (req: express.Request, res: express.Response) => {
        let result = await CategoriesService.deleteById(Number(req.params.categoryId));
        res.status(result.status).send(result.message);
    }
    patchCategory = async (req: express.Request, res: express.Response) => {
        let result = await CategoriesService.patchById(Number(req.params.categoryId), req.body);
        res.status(result.status).send(result.message);
    }
}
export default new CategoriesController();