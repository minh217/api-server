import { queryResult } from "pg-promise";
import { db } from "../../../common/connection";
import { CommonMessages } from "../../../common/messages/common.messages";
import { CreateNewDto } from "../dto/create.dto";
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
}

export default new NewsDao();