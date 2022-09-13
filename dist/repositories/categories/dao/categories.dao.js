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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const debug_1 = __importDefault(require("debug"));
const connection_1 = require("../../../common/connection");
const log = (0, debug_1.default)('app:in-memory-dao');
const common_messages_1 = require("../../../common/messages/common.messages");
const pg_promise_1 = require("pg-promise");
class CategoriesDao {
    constructor() {
        log('Create new instance of UserDao');
    }
    getCategories() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield connection_1.db.query('SELECT * FROM categories');
        });
    }
    getCategoryById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield connection_1.db.query('SELECT * FROM categories WHERE id = $1', [id], pg_promise_1.queryResult.one)
                .catch(() => { return null; });
            console.log("TESST", result);
            return result;
        });
    }
    addCategory(category) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = common_messages_1.CommonMessages.createSuccessfully;
            yield connection_1.db.query('INSERT INTO categories(code, name) VALUES($1,$2)', [category.code, category.name], pg_promise_1.queryResult.none).catch(() => {
                result = common_messages_1.CommonMessages.serverError;
            });
            return result;
        });
    }
    updateCategory(category) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = common_messages_1.CommonMessages.updateSuccessfully;
            yield connection_1.db.query('UPDATE categories SET name = $1, code = $2 WHERE id = $3', [category.name, category.code, category.id], pg_promise_1.queryResult.none).catch(() => {
                console.log("TESST11");
                result = common_messages_1.CommonMessages.serverError;
            });
            return result;
        });
    }
    deleteCategory(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = common_messages_1.CommonMessages.deleteSuccessfully;
            yield connection_1.db.query('DELETE FROM categories WHERE id = $1', [id], pg_promise_1.queryResult.none).catch((error) => {
                console.log(error);
                result = common_messages_1.CommonMessages.serverError;
            });
            return result;
        });
    }
    patchCategory(id, resource) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = common_messages_1.CommonMessages.updateSuccessfully;
            const allowedPatchFields = [
                'name',
                'code'
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
            yield connection_1.db.query(`UPDATE categories SET ${queryStr} WHERE id = $1`, [id, ...Object.values(resource)], pg_promise_1.queryResult.none).catch((error) => {
                result = common_messages_1.CommonMessages.serverError;
            });
            return result;
        });
    }
    getCategoryByCode(code) {
        return __awaiter(this, void 0, void 0, function* () {
            let category = yield connection_1.db.query('SELECT * FROM categories WHERE code = $1', [code]);
            if (category.length <= 0) {
                return null;
            }
            else {
                return category;
            }
        });
    }
    getCategorySameCode(code, id) {
        return __awaiter(this, void 0, void 0, function* () {
            let category = yield connection_1.db.query('SELECT * FROM categories WHERE code = $1 AND id <> $2', [code, id]).catch(() => {
                return null;
            });
            if (category.length <= 0) {
                return null;
            }
            else {
                return category;
            }
        });
    }
    checkCategoryHaseNews(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let news = yield connection_1.db.query('SELECT 1 FROM news WHERE category_id = $1', [id], pg_promise_1.queryResult.any).catch(() => {
                return null;
            });
            return news;
        });
    }
}
exports.default = new CategoriesDao;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcmllcy5kYW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9yZXBvc2l0b3JpZXMvY2F0ZWdvcmllcy9kYW8vY2F0ZWdvcmllcy5kYW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxrREFBMEI7QUFDMUIsMkRBQWdEO0FBRWhELE1BQU0sR0FBRyxHQUFvQixJQUFBLGVBQUssRUFBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBQ3hELDhFQUF3RTtBQUl4RSwyQ0FBeUM7QUFFekMsTUFBTSxhQUFhO0lBQ2Y7UUFDSSxHQUFHLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUssYUFBYTs7WUFDZixPQUFPLE1BQU0sZUFBRSxDQUFDLEtBQUssQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1FBQ3RELENBQUM7S0FBQTtJQUNLLGVBQWUsQ0FBQyxFQUFVOztZQUM1QixJQUFJLE1BQU0sR0FBRyxNQUFNLGVBQUUsQ0FBQyxLQUFLLENBQUMsd0NBQXdDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSx3QkFBVyxDQUFDLEdBQUcsQ0FBQztpQkFDM0YsS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFFLE9BQU8sSUFBSSxDQUFBLENBQUEsQ0FBQyxDQUFDLENBQUE7WUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDN0IsT0FBTyxNQUFNLENBQUM7UUFDbEIsQ0FBQztLQUFBO0lBQ0ssV0FBVyxDQUFDLFFBQTJCOztZQUN6QyxJQUFJLE1BQU0sR0FBRyxnQ0FBYyxDQUFDLGtCQUFrQixDQUFDO1lBQy9DLE1BQU0sZUFBRSxDQUFDLEtBQUssQ0FDVixrREFBa0QsRUFDbEQsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFDOUIsd0JBQVcsQ0FBQyxJQUFJLENBQ25CLENBQUMsS0FBSyxDQUNILEdBQUcsRUFBRTtnQkFD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