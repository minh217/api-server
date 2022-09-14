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
const news_dao_1 = __importDefault(require("../repositories/news/dao/news.dao"));
class NewsService {
    constructor() {
        this.list = (limit, page) => __awaiter(this, void 0, void 0, function* () {
            return yield news_dao_1.default.getNews();
        });
        this.create = (resource) => __awaiter(this, void 0, void 0, function* () {
            return yield news_dao_1.default.createNew(resource);
        });
        this.putById = (resource) => __awaiter(this, void 0, void 0, function* () {
            return yield news_dao_1.default.putNew(resource);
        });
        this.readById = (id) => __awaiter(this, void 0, void 0, function* () {
            return yield news_dao_1.default.getNewById(id);
        });
        this.deleteById = (id) => __awaiter(this, void 0, void 0, function* () { return Promise; });
        this.patchById = (id, resource) => __awaiter(this, void 0, void 0, function* () {
            return yield news_dao_1.default.patchNew(id, resource);
        });
        this.getNewsByCategoryId = (id) => __awaiter(this, void 0, void 0, function* () {
            return yield news_dao_1.default.getNewsByCategoryId(id);
        });
    }
}
exports.default = new NewsService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3cy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc2VydmljZXMvbmV3cy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsaUZBQXdEO0FBSXhELE1BQU0sV0FBVztJQUFqQjtRQUNJLFNBQUksR0FBRyxDQUFPLEtBQWEsRUFBRSxJQUFZLEVBQUUsRUFBRTtZQUN6QyxPQUFPLE1BQU0sa0JBQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNuQyxDQUFDLENBQUEsQ0FBQztRQUNGLFdBQU0sR0FBRyxDQUFPLFFBQXNCLEVBQUUsRUFBRTtZQUN0QyxPQUFPLE1BQU0sa0JBQU8sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDN0MsQ0FBQyxDQUFBLENBQUM7UUFDRixZQUFPLEdBQUcsQ0FBTyxRQUFtQixFQUFFLEVBQUU7WUFDcEMsT0FBTyxNQUFNLGtCQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzFDLENBQUMsQ0FBQSxDQUFDO1FBQ0YsYUFBUSxHQUFHLENBQU8sRUFBVSxFQUFFLEVBQUU7WUFDNUIsT0FBTyxNQUFNLGtCQUFPLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsQ0FBQSxDQUFDO1FBQ0YsZUFBVSxHQUFHLENBQU8sRUFBTyxFQUFFLEVBQUUsZ0RBQUMsT0FBQSxPQUFZLENBQUEsR0FBQSxDQUFDO1FBQzdDLGNBQVMsR0FBRyxDQUFPLEVBQVUsRUFBRSxRQUFxQixFQUFFLEVBQUU7WUFDcEQsT0FBTyxNQUFNLGtCQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNoRCxDQUFDLENBQUEsQ0FBQztRQUNGLHdCQUFtQixHQUFHLENBQU0sRUFBVSxFQUFFLEVBQUU7WUFDdEMsT0FBTyxNQUFNLGtCQUFPLENBQUMsbUJBQW1CLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDakQsQ0FBQyxDQUFBLENBQUE7SUFFTCxDQUFDO0NBQUE7QUFFRCxrQkFBZSxJQUFJLFdBQVcsRUFBRSxDQUFDIn0=