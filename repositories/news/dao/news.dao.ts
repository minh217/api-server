import { db } from "../../../common/connection";
class NewsDao {
    getNews = async () => {
        return await db.query('SELECT * FROM news;').catch((error) => );
    }
}

export default new NewsDao();