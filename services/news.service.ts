import { CRUD } from "../common/crud.inteface";
import NewsDao from "../repositories/news/dao/news.dao";
import { CreateNewDto } from "../repositories/news/dto/create.new.dto";
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
    deleteById = async (id: any) => Promise<any>;
    patchById = async (id: any, resource: any) => Promise<any>;
    
}

export default new NewsService();