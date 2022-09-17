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
const news_service_1 = __importDefault(require("../../services/news.service"));
class NewsController {
    constructor() {
        this.listNews = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let result = yield news_service_1.default.list(100, 0);
            res.status(200).send(result);
        });
        this.createNew = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let result = yield news_service_1.default.create({
                title: req.body.title,
                content: req.body.content,
                category_id: Number(req.body.category_id),
                created_by: req.body.created_by,
                summary: req.body.summary
            });
            res.status(result.status).send(result.message);
        });
        this.putNew = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let result = yield news_service_1.default.putById({
                title: req.body.title,
                content: req.body.content,
                category_id: req.body.category_id,
                id: Number(req.params.newId),
                summary: req.body.summary
            });
            res.status(result.status).send(result.message);
        });
        this.getById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let result = yield news_service_1.default.readById(Number(req.params.newId));
            if (result == null) {
                res.status(400).send(result);
            }
            else {
                res.status(200).send(result);
            }
        });
        this.patchNew = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let result = yield news_service_1.default.patchById(Number(req.params.newId), req.body);
            res.status(result.status).send(result.message);
        });
        this.getNewsByCategoryId = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let result = yield news_service_1.default.getNewsByCategoryId(Number(req.params.categoryId));
            res.status(200).send(result);
        });
        this.deleteNew = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let result = yield news_service_1.default.deleteById(Number(req.params.newId));
            res.status(result.status).send(result.message);
        });
    }
}
exports.default = new NewsController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3cy5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY29udHJvbGxlcnMvbmV3cy9uZXdzLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQSwrRUFBc0Q7QUFDdEQsTUFBTSxjQUFjO0lBQXBCO1FBQ0ksYUFBUSxHQUFHLENBQ1AsR0FBb0IsRUFDcEIsR0FBcUIsRUFDdkIsRUFBRTtZQUNBLElBQUksTUFBTSxHQUFHLE1BQU0sc0JBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzVDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2pDLENBQUMsQ0FBQSxDQUFBO1FBQ0QsY0FBUyxHQUFJLENBQ1QsR0FBb0IsRUFDcEIsR0FBcUIsRUFDdkIsRUFBRTtZQUNBLElBQUksTUFBTSxHQUFHLE1BQU0sc0JBQVcsQ0FBQyxNQUFNLENBQUM7Z0JBQ2xDLEtBQUssRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUs7Z0JBQ3JCLE9BQU8sRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU87Z0JBQ3pCLFdBQVcsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7Z0JBQ3pDLFVBQVUsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVU7Z0JBQy9CLE9BQU8sRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU87YUFDNUIsQ0FBQyxDQUFDO1lBQ0gsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNuRCxDQUFDLENBQUEsQ0FBQTtRQUNELFdBQU0sR0FBRyxDQUNMLEdBQW9CLEVBQ3BCLEdBQXFCLEVBQ3ZCLEVBQUU7WUFDQSxJQUFJLE1BQU0s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