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
        this.putById = (resource) => __awaiter(this, void 0, void 0, function* () { return Promise; });
        this.readById = (id) => __awaiter(this, void 0, void 0, function* () { return Promise; });
        this.deleteById = (id) => __awaiter(this, void 0, void 0, function* () { return Promise; });
        this.patchById = (id, resource) => __awaiter(this, void 0, void 0, function* () { return Promise; });
    }
}
exports.default = new NewsService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3cy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc2VydmljZXMvbmV3cy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsaUZBQXdEO0FBRXhELE1BQU0sV0FBVztJQUFqQjtRQUNJLFNBQUksR0FBRyxDQUFPLEtBQWEsRUFBRSxJQUFZLEVBQUUsRUFBRTtZQUN6QyxPQUFPLE1BQU0sa0JBQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNuQyxDQUFDLENBQUEsQ0FBQztRQUNGLFdBQU0sR0FBRyxDQUFPLFFBQXNCLEVBQUUsRUFBRTtZQUN0QyxPQUFPLE1BQU0sa0JBQU8sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDN0MsQ0FBQyxDQUFBLENBQUM7UUFDRixZQUFPLEdBQUcsQ0FBTyxRQUFhLEVBQUUsRUFBRSxnREFBQyxPQUFBLE9BQVksQ0FBQSxHQUFBLENBQUM7UUFDaEQsYUFBUSxHQUFHLENBQU8sRUFBTyxFQUFFLEVBQUUsZ0RBQUMsT0FBQSxPQUFZLENBQUEsR0FBQSxDQUFDO1FBQzNDLGVBQVUsR0FBRyxDQUFPLEVBQU8sRUFBRSxFQUFFLGdEQUFDLE9BQUEsT0FBWSxDQUFBLEdBQUEsQ0FBQztRQUM3QyxjQUFTLEdBQUcsQ0FBTyxFQUFPLEVBQUUsUUFBYSxFQUFFLEVBQUUsZ0RBQUMsT0FBQSxPQUFZLENBQUEsR0FBQSxDQUFDO0lBRS9ELENBQUM7Q0FBQTtBQUVELGtCQUFlLElBQUksV0FBVyxFQUFFLENBQUMifQ==