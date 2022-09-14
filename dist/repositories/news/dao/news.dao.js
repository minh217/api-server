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
                    ${resource.category_id},
                    '${resource.title}',
                    '${resource.content}',
                    '${(0, date_fns_1.format)(new Date(), 'yyyy-MM-dd')}',
                    '${resource.created_by}'
                );`, pg_promise_1.queryResult.none).catch((error) => {
                result = common_messages_1.CommonMessages.serverError;
            });
            return result;
        });
    }
}
exports.default = new NewsDao();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3cy5kYW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9yZXBvc2l0b3JpZXMvbmV3cy9kYW8vbmV3cy5kYW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBeUM7QUFDekMsMkRBQWdEO0FBQ2hELDhFQUEwRTtBQUUxRSx1Q0FBaUM7QUFDakMsTUFBTSxPQUFPO0lBQWI7UUFDSSxZQUFPLEdBQUcsR0FBUyxFQUFFO1lBQ2pCLE9BQU8sTUFBTSxlQUFFLENBQUMsS0FBSyxDQUFDLHFCQUFxQixFQUFFLHdCQUFXLENBQUMsR0FBRyxDQUFDO2lCQUM1RCxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtnQkFDYixJQUFHLEtBQUssRUFBQztvQkFDTCxNQUFNLEtBQUssQ0FBQTtpQkFDZDtZQUNMLENBQUMsQ0FDQSxDQUFDO1FBQ04sQ0FBQyxDQUFBLENBQUE7UUFDRCxjQUFTLEdBQUcsQ0FBTyxRQUFzQixFQUFFLEVBQUU7WUFDekMsSUFBSSxNQUFNLEdBQUcsZ0NBQWMsQ0FBQyxrQkFBa0IsQ0FBQztZQUUvQyxNQUFNLGVBQUUsQ0FBQyxLQUFLLENBQ1Y7Ozs7Ozs7O3NCQVFVLFFBQVEsQ0FBQyxXQUFXO3VCQUNuQixRQUFRLENBQUMsS0FBSzt1QkFDZCxRQUFRLENBQUMsT0FBTzt1QkFDaEIsSUFBQSxpQkFBTSxFQUFDLElBQUksSUFBSSxFQUFFLEVBQUUsWUFBWSxDQUFDO3VCQUNoQyxRQUFRLENBQUMsVUFBVTttQkFDdkIsRUFDSCx3QkFBVyxDQUFDLElBQUksQ0FDbkIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtnQkFDZCxNQUFNLEdBQUcsZ0NBQWMsQ0FBQyxXQUFXLENBQUE7WUFDdkMsQ0FBQyxDQUFDLENBQUM7WUFDUCxPQUFPLE1BQU0sQ0FBQTtRQUNqQixDQUFDLENBQUEsQ0FBQTtJQUNMLENBQUM7Q0FBQTtBQUVELGtCQUFlLElBQUksT0FBTyxFQUFFLENBQUMifQ==