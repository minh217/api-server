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
            yield connection_1.db.query(`INSERT INTO news(
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
                );`, pg_promise_1.queryResult.none).catch((error) => {
                console.log(error);
                result = common_messages_1.CommonMessages.serverError;
            });
            return result;
        });
        this.putNew = (resource) => __awaiter(this, void 0, void 0, function* () {
            let result = common_messages_1.CommonMessages.updateSuccessfully;
            console.log(resource);
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
                console.log(error);
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
                console.log(error);
                result = common_messages_1.CommonMessages.serverError;
            });
            return result;
        });
    }
}
exports.default = new NewsDao();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3cy5kYW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9yZXBvc2l0b3JpZXMvbmV3cy9kYW8vbmV3cy5kYW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBeUM7QUFDekMsMkRBQWdEO0FBQ2hELDhFQUEwRTtBQUkxRSx1Q0FBaUM7QUFDakMsTUFBTSxPQUFPO0lBQWI7UUFDSSxZQUFPLEdBQUcsR0FBUyxFQUFFO1lBQ2pCLE9BQU8sTUFBTSxlQUFFLENBQUMsS0FBSyxDQUFDLHFCQUFxQixFQUFFLHdCQUFXLENBQUMsR0FBRyxDQUFDO2lCQUM1RCxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtnQkFDYixJQUFHLEtBQUssRUFBQztvQkFDTCxNQUFNLEtBQUssQ0FBQTtpQkFDZDtZQUNMLENBQUMsQ0FDQSxDQUFDO1FBQ04sQ0FBQyxDQUFBLENBQUE7UUFDRCxjQUFTLEdBQUcsQ0FBTyxRQUFzQixFQUFFLEVBQUU7WUFDekMsSUFBSSxNQUFNLEdBQUcsZ0NBQWMsQ0FBQyxrQkFBa0IsQ0FBQztZQUUvQyxNQUFNLGVBQUUsQ0FBQyxLQUFLLENBQ1Y7Ozs7Ozs7OztzQkFTVSxNQUFNLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQzt1QkFDM0IsUUFBUSxDQUFDLEtBQUs7dUJBQ2QsUUFBUSxDQUFDLE9BQU87dUJBQ2hCLElBQUEsaUJBQU0sRUFBQyxJQUFJLElBQUksRUFBRSxFQUFFLFlBQVksQ0FBQzt1QkFDaEMsUUFBUSxDQUFDLFVBQVU7dUJBQ25CLFFBQVEsQ0FBQyxPQUFPO21CQUNwQixFQUNILHdCQUFXLENBQUMsSUFBSSxDQUNuQixDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO2dCQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ25CLE1BQU0sR0FBRyxnQ0FBYyxDQUFDLFdBQVcsQ0FBQTtZQUN2QyxDQUFDLENBQUMsQ0FBQztZ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