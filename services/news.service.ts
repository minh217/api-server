import { CRUD } from "../common/crud.inteface";
import NewsDao from "../repositories/news/dao/news.dao";
class NewsService implements CRUD{
    list = async (limit: number, page: number) => {
        return await NewsDao.getNews();
    };
    create: (resource: any) => Promise<any>;
    putById: (resource: any) => Promise<any>;
    readById: (id: any) => Promise<any>;
    deleteById: (id: any) => Promise<any>;
    patchById: (id: any, resource: any) => Promise<any>;
    
}

export default new NewsService();