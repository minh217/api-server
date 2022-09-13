import { CRUD } from "../common/crud.inteface";
import CategoriesDao from "../repositories/categories/dao/categories.dao";
import { CreateCategoryDto } from "../repositories/categories/dto/create.category.dto";
import { PatchCategoryDto } from "../repositories/categories/dto/patch.category.dto";
import { PutCategoryDto } from "../repositories/categories/dto/put.category.dto";

class CategoriesService implements CRUD{
    list = async (limit: number, page: number) => {
        return CategoriesDao.getCategories();
    };
    create = async (resource: CreateCategoryDto) => {
        return await CategoriesDao.addCategory(resource);
    };
    putById = async (resource: PutCategoryDto) => {
        return await CategoriesDao.updateCategory(resource);
    };
    readById = async (id: number) => {
        return await CategoriesDao.getCategoryById(Number(id));
    };
    deleteById = async (id: number) => { 
        return await CategoriesDao.deleteCategory(id);
    };
    patchById = async (id: number, resource: PatchCategoryDto) => {
         return await CategoriesDao.patchCategory(id, resource);
    };

    getCategoryByCode = async (code: string) => {
        return await CategoriesDao.getCategoryByCode(code);
    }

    getCategorySameCode = async(code: string, id: number) => {
        return await CategoriesDao.getCategorySameCode(code, id);
    }
}

export default new CategoriesService();;