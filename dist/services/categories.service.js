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
const categories_dao_1 = __importDefault(require("../repositories/categories/dao/categories.dao"));
class CategoriesService {
    constructor() {
        this.list = (limit, page) => __awaiter(this, void 0, void 0, function* () {
            return categories_dao_1.default.getCategories();
        });
        this.create = (resource) => __awaiter(this, void 0, void 0, function* () {
            return yield categories_dao_1.default.addCategory(resource);
        });
        this.putById = (resource) => __awaiter(this, void 0, void 0, function* () {
            return yield categories_dao_1.default.updateCategory(resource);
        });
        this.readById = (id) => __awaiter(this, void 0, void 0, function* () {
            return yield categories_dao_1.default.getCategoryById(Number(id));
        });
        this.deleteById = (id) => __awaiter(this, void 0, void 0, function* () {
            return yield categories_dao_1.default.deleteCategory(id);
        });
        this.patchById = (id, resource) => __awaiter(this, void 0, void 0, function* () {
            return yield categories_dao_1.default.patchCategory(id, resource);
        });
        this.getCategoryByCode = (code) => __awaiter(this, void 0, void 0, function* () {
            return yield categories_dao_1.default.getCategoryByCode(code);
        });
        this.getCategorySameCode = (code, id) => __awaiter(this, void 0, void 0, function* () {
            return yield categories_dao_1.default.getCategorySameCode(code, id);
        });
        this.checkCategoryHaseNews = (id) => __awaiter(this, void 0, void 0, function* () {
            return yield categories_dao_1.default.checkCategoryHaseNews(id);
        });
    }
}
exports.default = new CategoriesService();
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcmllcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc2VydmljZXMvY2F0ZWdvcmllcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsbUdBQTBFO0FBSzFFLE1BQU0saUJBQWlCO0lBQXZCO1FBQ0ksU0FBSSxHQUFHLENBQU8sS0FBYSxFQUFFLElBQVksRUFBRSxFQUFFO1lBQ3pDLE9BQU8sd0JBQWEsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN6QyxDQUFDLENBQUEsQ0FBQztRQUNGLFdBQU0sR0FBRyxDQUFPLFFBQTJCLEVBQUUsRUFBRTtZQUMzQyxPQUFPLE1BQU0sd0JBQWEsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDckQsQ0FBQyxDQUFBLENBQUM7UUFDRixZQUFPLEdBQUcsQ0FBTyxRQUF3QixFQUFFLEVBQUU7WUFDekMsT0FBTyxNQUFNLHdCQUFhLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hELENBQUMsQ0FBQSxDQUFDO1FBQ0YsYUFBUSxHQUFHLENBQU8sRUFBVSxFQUFFLEVBQUU7WUFDNUIsT0FBTyxNQUFNLHdCQUFhLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzNELENBQUMsQ0FBQSxDQUFDO1FBQ0YsZUFBVSxHQUFHLENBQU8sRUFBVSxFQUFFLEVBQUU7WUFDOUIsT0FBTyxNQUFNLHdCQUFhLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2xELENBQUMsQ0FBQSxDQUFDO1FBQ0YsY0FBUyxHQUFHLENBQU8sRUFBVSxFQUFFLFFBQTBCLEVBQUUsRUFBRTtZQUN4RCxPQUFPLE1BQU0sd0JBQWEsQ0FBQyxhQUFhLENBQUMsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQzVELENBQUMsQ0FBQSxDQUFDO1FBRUYsc0JBQWlCLEdBQUcsQ0FBTyxJQUFZLEVBQUUsRUFBRTtZQUN2QyxPQUFPLE1BQU0sd0JBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2RCxDQUFDLENBQUEsQ0FBQTtRQUVELHdCQUFtQixHQUFHLENBQU0sSUFBWSxFQUFFLEVBQVUsRUFBRSxFQUFFO1lBQ3BELE9BQU8sTUFBTSx3QkFBYSxDQUFDLG1CQUFtQixDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztRQUM3RCxDQUFDLENBQUEsQ0FBQTtRQUNELDBCQUFxQixHQUFHLENBQU0sRUFBVSxFQUFFLEVBQUU7WUFDeEMsT0FBTyxNQUFNLHdCQUFhLENBQUMscUJBQXFCLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDekQsQ0FBQyxDQUFBLENBQUE7SUFDTCxDQUFDO0NBQUE7QUFFRCxrQkFBZSxJQUFJLGlCQUFpQixFQUFFLENBQUM7QUFBQSxDQUFDIn0=