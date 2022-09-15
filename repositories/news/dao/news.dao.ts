import { queryResult } from "pg-promise";
import { db } from "../../../common/connection";
import { CommonMessages } from "../../../common/messages/common.messages";
import { CreateNewDto } from "../dto/create.new.dto";
import { PutNewDto } from "../dto/put.new.dto";
import { PatchNewDto } from "../dto/patch.new.dto";
import { format } from 'date-fns'
class NewsDao {
    getNews = async () => {
        return await db.query('SELECT * FROM news;', queryResult.any)
        .catch((error) =>{
            if(error){
                throw error
            }
        } 
        );
    }
    createNew = async (resource: CreateNewDto) => {
        let result = CommonMessages.createSuccessfully;

        await db.query(
            `INSERT INTO news(
                category_id,
                title,
                content,
                created,
                created_by
                ) 
                VALUES(
                    ${Number(resource.category_id)},
                    '${resource.title}',
                    '${resource.content}',
                    '${format(new Date(), 'yyyy-MM-dd')}',
                    '${resource.created_by}'
                );`,
                queryResult.none
            ).catch((error) => {
                console.log(error);
                result = CommonMessages.serverError
            });
        return result
    }

    putNew = async(resource: PutNewDto) => {
        let result = CommonMessages.updateSuccessfully;
        console.log(resource);
        await db.query(
            `UPDATE news SET
                title = $2,
                content = $3,
                category_id = $4,
                updated = $5
            WHERE id = $1
            `,
            [
                resource.id,
                resource.title,
                resource.content,
                resource.category_id,
                format(new Date(), 'yyyy-MM-dd')
            ],
            queryResult.none
        ).catch((error) => {
            console.log(error);
            result = CommonMessages.serverError;
        });
        return result;
    }

    getNewById = async (id: number) => {
        let result = db.query(`SELECT * FROM news WHERE id =${id}`).catch(() => {return null;});
        return result;
    } 

    patchNew = async (id: number, resource: PatchNewDto) => {
        let result = CommonMessages.updateSuccessfully;
        const allowedPatchFields = [
            'title',
            'content',
            'images',
            'category_id'
        ]
        let queryStr = "";
        let stt = 2;
        Object.keys(resource).forEach((key) => {
            
            if(!allowedPatchFields.includes(key))
            {
                delete resource[key as keyof PatchNewDto];
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
            `UPDATE news SET ${queryStr} WHERE id = $1`,
            [id, ...Object.values(resource)],
            queryResult.none
        ).catch((error) =>{
            result = CommonMessages.serverError;
        });
        return result;     
    }

    getNewsByCategoryId = async(categoryId: number) => {
        let result = await db.query(
            `SELECT * FROM news WHERE category_id = ${categoryId}`
            , queryResult.many)
            .catch(() => {
                return [];
            });
        return result;
    }
    deleteById = async (id: number) => {
        let result = CommonMessages.deleteSuccessfully;
        await db.query(
            'DELETE FROM news WHERE id = $1',
            [id],
            queryResult.none
        ).catch((error) => {
            console.log(error);
            result = CommonMessages.serverError
        });
        
        return result;
    }

}

export default new NewsDao();