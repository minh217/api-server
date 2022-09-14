import { CRUD } from "../common/crud.inteface";
import NewsDao from "../repositories/news/dao/news.dao";
import { CreateNewDto } from "../repositories/news/dto/create.new.dto";
import { PatchNewDto } from "../repositories/news/dto/patch.new.dto";
import { PutNewDto } from "../repositories/news/dto/put.new.dto";
class NewsService implements CRUD{
    list = async (limit: number, page: number) => {
        return await NewsDao.getNews();
    };
    create = async (resource: CreateNewDto) => {
        return await NewsDao.createNew(resource);
    };
    putById = async (resource: PutNewDto) => {
        return await NewsDao.putNew(resource);
    };
    readById = async (id: number) => {
        return await NewsDao.getNewById(id);
    };
    deleteById = async (id: number) => {
        return await NewsDao.deleteById(id);
    };
    patchById = async (id: number, resource: PatchNewDto) => {
        return await NewsDao.patchNew(id, resource);
    };
    getNewsByCategoryId = async(id: number) => {
        return await NewsDao.getNewsByCategoryId(id);
    }
    
}

export default new NewsService();