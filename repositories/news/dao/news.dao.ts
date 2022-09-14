import { queryResult } from "pg-promise";
import { db } from "../../../common/connection";
import { CommonMessages } from "../../../common/messages/common.messages";
import { CreateNewDto } from "../dto/create.new.dto";
import { PutNewDto } from "../dto/put.new.dto";
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
                    ${resource.category_id},
                    '${resource.title}',
                    '${resource.content}',
                    '${format(new Date(), 'yyyy-MM-dd')}',
                    '${resource.created_by}'
                );`,
                queryResult.none
            ).catch((error) => {
                result = CommonMessages.serverError
            });
        return result
    }

    putNew = async(resource: PutNewDto) => {
        let result = CommonMessages.updateSuccessfully;
        await db.query(
            `UPDATE news SET
                title = $2,
                content = $3,
                category_id = $4
            WHERE id = $1
            `,
            [
                resource.id,
                resource.title,
                resource.content,
                resource.category_id
            ],
            queryResult.none
        ).catch(() => {
            result = CommonMessages.serverError;
        });
        return result;
    }

    getNewById = async (id: number) => {
        let result = db.query(`SELECT * FROM news WHERE id =${id}`).catch(() => {return null;});
        return result;
    } 
}

export default new NewsDao();