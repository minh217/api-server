import { CRUD } from "../common/crud.inteface";
import NewsDao from "../repositories/news/dao/news.dao";
import { CreateNewDto } from "../repositories/news/dto/create.dto";
class NewsService implements CRUD{
    list = async (limit: number, page: number) => {
        return await NewsDao.getNews();
    };
    create = async (resource: CreateNewDto) => {
        return await NewsDao.createNew(resource);
    };
    putById = async (resource: any) => Promise<any>;
    readById = async (id: any) => Promise<any>;
    deleteById = async (id: any) => Promise<any>;
    patchById = async (id: any, resource: any) => Promise<any>;
    
}

export default new NewsService();