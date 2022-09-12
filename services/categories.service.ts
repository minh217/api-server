import { CRUD } from "../common/crud.inteface";
import CategoriesDao from "../repositories/categories/dao/categories.dao";
import { CreateCategoryDto } from "../repositories/categories/dto/create.category.dto";
import { PutCategoryDto } from "../repositories/categories/dto/put.category.dto";

class CategoriesService implements CRUD{
    list = async (limit: number, page: number) => {
        return CategoriesDao.getCategories();
    };
    create = async (resource: CreateCategoryDto) => {
        return await CategoriesDao.addCategory(resource);
    }
    putById: (id: string, resource: PutCategoryDto) => {
        return 
    };
    readById: (id: string) => Promise<any>;
    deleteById: (id: string) => Promise<string>;
    patchById: (id: string, resource: any) => Promise<string>;
}