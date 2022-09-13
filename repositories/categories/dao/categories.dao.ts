import debug from 'debug';
import { db } from '../../../common/connection';
import { CreateCategoryDto } from '../dto/create.category.dto';
const log: debug.IDebugger = debug('app:in-memory-dao');
import {CommonMessages} from "../../../common/messages/common.messages";
import { PutCategoryDto } from '../dto/put.category.dto';
import { DeleteCategoryDto } from '../dto/delete.category.dto';
import { PatchCategoryDto } from '../dto/patch.category.dto';
import { queryResult } from 'pg-promise';

class CategoriesDao{
    constructor(){
        log('Create new instance of UserDao');
    }

    async getCategories(){
        return await db.query('SELECT * FROM categories');
    }
    async getCategoryById(id: number){
        let result = await db.query('SELECT * FROM categories WHERE id = $1', [id], queryResult.one)
        .catch(() => {return null})
        console.log("TESST", result);
        return result;
    }
    async addCategory(category: CreateCategoryDto) {
        let result = CommonMessages.createSuccessfully;
        await db.query(
            'INSERT INTO categories(code, name) VALUES($1,$2)', 
            [category.code, category.name],
            queryResult.none
        ).catch(
            () => {
                result =  CommonMessages.serverError;
            }
        );
        return result;
    }

    async updateCategory(category: PutCategoryDto) {
        let result = CommonMessages.updateSuccessfully;
        await db.query(
            'UPDATE categories SET name = $1, code = $2 WHERE id = $3',
            [category.name, category.code,category.id],
            queryResult.none
        ).catch(() =>{
            console.log("TESST11");
            result = CommonMessages.serverError;
        });
        return result;
    }

    async deleteCategory(id: number) {
        let result = CommonMessages.deleteSuccessfully;
        await db.query(
            'DELETE FROM categories WHERE id = $1',
            [id],
            queryResult.none
        ).catch((error) => {
            console.log(error);
            result = CommonMessages.serverError
        });
        
        return result;
    }

    async patchCategory(id: number, resource: PatchCategoryDto){
        let result = CommonMessages.updateSuccessfully;
        const allowedPatchFields = [
            'name',
            'code'
        ]
        let queryStr = "";
        let stt = 2;
        Object.keys(resource).forEach((key) => {
            
            if(!allowedPatchFields.includes(key))
            {
                delete resource[key as keyof PatchCategoryDto];
            }else{
                if(queryStr === "")
                {
                    queryStr += ` ${key} = $${stt} `
                }else{
                    queryStr += `, ${key} = $${stt} `
                }
                
            }
            stt++;
        });
        await db.query(
            `UPDATE categories SET ${queryStr} WHERE id = $1`,
            [id, ...Object.values(resource)],
            queryResult.none
        ).catch((error) =>{
            result = CommonMessages.serverError;
        });
        return result;       
    }

    async getCategoryByCode(code: string){
        let category = await db.query('SELECT * FROM categories WHERE code = $1', [code]);
        if(category.length <= 0){
            return null;
        }else{
            return category;
        }
    }

    async getCategorySameCode(code: string, id: number){
        let category = await db.query(
            'SELECT * FROM categories WHERE code = $1 AND id <> $2', 
            [code, id]
            ).catch(() => {
                return null;
            });
        if(category.length <= 0){
            return null;
        }else{
            return category;
        }
    }

    async checkCategoryHaseNews(id: number){
        let news = await db.query(
            'SELECT 1 FROM news WHERE category_id = $1', 
            [id], 
            queryResult.any
            ).catch(() => {
                return null;
            });
        return news;
    }
}

export default new CategoriesDao;