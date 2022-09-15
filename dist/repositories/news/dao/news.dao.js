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
                created_by
                ) 
                VALUES(
                    ${Number(resource.category_id)},
                    '${resource.title}',
                    '${resource.content}',
                    '${(0, date_fns_1.format)(new Date(), 'yyyy-MM-dd')}',
                    '${resource.created_by}'
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
                updated = $5
            WHERE id = $1
            `, [
                resource.id,
                resource.title,
                resource.content,
                resource.category_id,
                (0, date_fns_1.format)(new Date(), 'yyyy-MM-dd')
            ], pg_promise_1.queryResult.none).catch((error) => {
                console.log(error);
                result = common_messages_1.CommonMessages.serverError;
            });
            return result;
        });
        this.getNewById = (id) => __awaiter(this, void 0, void 0, function* () {
            let result = connection_1.db.query(`SELECT * FROM news WHERE id =${id}`).catch(() => { return null; });
            return result;
        });
        this.patchNew = (id, resource) => __awaiter(this, void 0, void 0, function* () {
            let result = common_messages_1.CommonMessages.updateSuccessfully;
            const allowedPatchFields = [
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3cy5kYW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9yZXBvc2l0b3JpZXMvbmV3cy9kYW8vbmV3cy5kYW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBeUM7QUFDekMsMkRBQWdEO0FBQ2hELDhFQUEwRTtBQUkxRSx1Q0FBaUM7QUFDakMsTUFBTSxPQUFPO0lBQWI7UUFDSSxZQUFPLEdBQUcsR0FBUyxFQUFFO1lBQ2pCLE9BQU8sTUFBTSxlQUFFLENBQUMsS0FBSyxDQUFDLHFCQUFxQixFQUFFLHdCQUFXLENBQUMsR0FBRyxDQUFDO2lCQUM1RCxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtnQkFDYixJQUFHLEtBQUssRUFBQztvQkFDTCxNQUFNLEtBQUssQ0FBQTtpQkFDZDtZQUNMLENBQUMsQ0FDQSxDQUFDO1FBQ04sQ0FBQyxDQUFBLENBQUE7UUFDRCxjQUFTLEdBQUcsQ0FBTyxRQUFzQixFQUFFLEVBQUU7WUFDekMsSUFBSSxNQUFNLEdBQUcsZ0NBQWMsQ0FBQyxrQkFBa0IsQ0FBQztZQUUvQyxNQUFNLGVBQUUsQ0FBQyxLQUFLLENBQ1Y7Ozs7Ozs7O3NCQVFVLE1BQU0sQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDO3VCQUMzQixRQUFRLENBQUMsS0FBSzt1QkFDZCxRQUFRLENBQUMsT0FBTzt1QkFDaEIsSUFBQSxpQkFBTSxFQUFDLElBQUksSUFBSSxFQUFFLEVBQUUsWUFBWSxDQUFDO3VCQUNoQyxRQUFRLENBQUMsVUFBVTttQkFDdkIsRUFDSCx3QkFBVyxDQUFDLElBQUksQ0FDbkIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtnQkFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNuQixNQUFNLEdBQUcsZ0NBQWMsQ0FBQyxXQUFXLENBQUE7WUFDdkMsQ0FBQyxDQUFDLENBQUM7WUFDUCxPQUFPLE1BQU0sQ0FBQTtRQUNq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