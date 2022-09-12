import debug from 'debug';
import { db } from '../../../common/connection';
import { CreateCategoryDto } from '../dto/create.category.dto';
const log: debug.IDebugger = debug('app:in-memory-dao');
import {CommonMessages} from "../../../common/messages/common.messages";
import { PutCategoryDto } from '../dto/put.category.dto';
import { DelteCategoryDto } from '../dto/delete.category.dto';

class CategoriesDao{
    constructor(){
        log('Create new instance of UserDao');
    }

    async getCategories(){
        return await db.query('SELECT * FROM categories');
    }
    async addCategory(category: CreateCategoryDto) {
        var result = await db.query(
            'INSERT INTO categories(name) VALUES($1)', 
            [category.name]
        );
        return CommonMessages.createSuccessfully;
    }

    async updateCategory(category: PutCategoryDto) {
        db.query(
            'UPDATE categories SET name = ${1} WHERE id = ${2}',
            [category.name, category.id]
        );
        return CommonMessages.updateSuccessfully;
    }

    async deleteCategory(category: DelteCategoryDto) {
        var result = await db.query(
            'SELECT count(*) FROM news WHERE category_id = ${id}',
            [category.id]
        );
        console.log(result);
        return CommonMessages.deleteSuccessfully;
    }
}

export default new CategoriesDao;