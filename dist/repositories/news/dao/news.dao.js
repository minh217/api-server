"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_promise_1 = require("pg-promise");
const connection_1 = require("../../../common/connection");
const common_messages_1 = require("../../../common/messages/common.messages");
const date_fns_1 = require("date-fns");
class NewsDao {
    constructor() {
        this.getNews = () => __awaiter(this, void 0, void 0, function* () {
            return yield connection_1.db.query('SELECT * FROM news;', pg_promise_1.queryResult.any)
                .catch((error) => {
                if (error) {
                    throw error;
                }
            });
        });
        this.createNew = (resource) => __awaiter(this, void 0, void 0, function* () {
            let result = common_messages_1.CommonMessages.createSuccessfully;
            console.log(`INSERT INTO news(
            category_id,
            title,
            content,
            created,
            created_by,
            summary
            ) 
            VALUES(
                ${Number(resource.category_id)},
                '${resource.title}',
                '${resource.content}',
                '${(0, date_fns_1.format)(new Date(), 'yyyy-MM-dd')}',
                '${resource.created_by}',
                '${resource.summary}'
            );`);
            yield connection_1.db.query(`INSERT INTO news(
                category_id,
                title,
                content,
                created,
                created_by,
                summary
                ) 
                VALUES(
                    $1,
                    $2,
                    $3,
                    $4,
                    $5,
                    $6
                );`, [
                Number(resource.category_id),
                resource.title,
                resource.content,
                (0, date_fns_1.format)(new Date(), 'yyyy-MM-dd'),
                resource.created_by,
                resource.summary
            ], pg_promise_1.queryResult.none).catch((error) => {
                console.log(error);
                result = common_messages_1.CommonMessages.serverError;
            });
            return result;
        });
        this.putNew = (resource) => __awaiter(this, void 0, void 0, function* () {
            let result = common_messages_1.CommonMessages.updateSuccessfully;
            yield connection_1.db.query(`UPDATE news SET
                title = $2,
                content = $3,
                category_id = $4,
                updated = $5,
                summary
            WHERE id = $1
            `, [
                resource.id,
                resource.title,
                resource.content,
                resource.category_id,
                (0, date_fns_1.format)(new Date(), 'yyyy-MM-dd'),
                resource.summary
            ], pg_promise_1.queryResult.none).catch((error) => {
                result = common_messages_1.CommonMessages.serverError;
            });
            return result;
        });
        this.getNewById = (id) => __awaiter(this, void 0, void 0, function* () {
            let result = connection_1.db.oneOrNone(`SELECT * FROM news WHERE id =${id}`)
                .catch(() => { return null; });
            return result;
        });
        this.patchNew = (id, resource) => __awaiter(this, void 0, void 0, function* () {
            let result = common_messages_1.CommonMessages.updateSuccessfully;
            const allowedPatchFields = [
                'summary',
                'title',
                'content',
                'images',
                'category_id'
            ];
            let queryStr = "";
            let stt = 2;
            Object.keys(resource).forEach((key) => {
                if (!allowedPatchFields.includes(key)) {
                    delete resource[key];
                }
                else {
                    if (queryStr === "") {
                        queryStr += ` ${key} = $${stt} `;
                    }
                    else {
                        queryStr += `, ${key} = $${stt} `;
                    }
                }
                stt++;
            });
            yield connection_1.db.query(`UPDATE news SET ${queryStr} WHERE id = $1`, [id, ...Object.values(resource)], pg_promise_1.queryResult.none).catch((error) => {
                result = common_messages_1.CommonMessages.serverError;
            });
            return result;
        });
        this.getNewsByCategoryId = (categoryId) => __awaiter(this, void 0, void 0, function* () {
            let result = yield connection_1.db.query(`SELECT * FROM news WHERE category_id = ${categoryId}`, pg_promise_1.queryResult.many)
                .catch(() => {
                return [];
            });
            return result;
        });
        this.deleteById = (id) => __awaiter(this, void 0, void 0, function* () {
            let result = common_messages_1.CommonMessages.deleteSuccessfully;
            yield connection_1.db.query('DELETE FROM news WHERE id = $1', [id], pg_promise_1.queryResult.none).catch((error) => {
                result = common_messages_1.CommonMessages.serverError;
            });
            return result;
        });
    }
}
exports.default = new NewsDao();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3cy5kYW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9yZXBvc2l0b3JpZXMvbmV3cy9kYW8vbmV3cy5kYW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBeUM7QUFDekMsMkRBQWdEO0FBQ2hELDhFQUEwRTtBQUkxRSx1Q0FBaUM7QUFDakMsTUFBTSxPQUFPO0lBQWI7UUFDSSxZQUFPLEdBQUcsR0FBUyxFQUFFO1lBQ2pCLE9BQU8sTUFBTSxlQUFFLENBQUMsS0FBSyxDQUFDLHFCQUFxQixFQUFFLHdCQUFXLENBQUMsR0FBRyxDQUFDO2lCQUM1RCxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtnQkFDYixJQUFHLEtBQUssRUFBQztvQkFDTCxNQUFNLEtBQUssQ0FBQTtpQkFDZDtZQUNMLENBQUMsQ0FDQSxDQUFDO1FBQ04sQ0FBQyxDQUFBLENBQUE7UUFDRCxjQUFTLEdBQUcsQ0FBTyxRQUFzQixFQUFFLEVBQUU7WUFDekMsSUFBSSxNQUFNLEdBQUcsZ0NBQWMsQ0FBQyxrQkFBa0IsQ0FBQztZQUMvQyxPQUFPLENBQUMsR0FBRyxDQUFDOzs7Ozs7Ozs7a0JBU0YsTUFBTSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUM7bUJBQzNCLFFBQVEsQ0FBQyxLQUFLO21CQUNkLFFBQVEsQ0FBQyxPQUFPO21CQUNoQixJQUFBLGlCQUFNLEVBQUMsSUFBSSxJQUFJLEVBQUUsRUFBRSxZQUFZLENBQUM7bUJBQ2hDLFFBQVEsQ0FBQyxVQUFVO21CQUNuQixRQUFRLENBQUMsT0FBTztlQUNwQixDQUFDLENBQUM7WUFDVCxNQUFNLGVBQUUsQ0FBQyxLQUFLLENBQ1Y7Ozs7Ozs7Ozs7Ozs7OzttQkFlTyxFQUNIO2dCQUNJLE1BQU0sQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDO2dCQUM1QixRQUFRLENBQUMsS0FBSztnQkFDZCxRQUFRLENBQUMsT0FBTztnQkFDaEIsSUFBQSxpQkFBTSxFQUFDLElB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