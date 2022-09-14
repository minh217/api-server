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
                created_by: req.body.created_by
            });
            res.status(result.status).send(result.message);
        });
        this.putNew = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let result = yield news_service_1.default.putById({
                title: req.body.title,
                content: req.body.content,
                category_id: req.body.category_id,
                id: Number(req.params.newId)
            });
            res.status(result.status).send(result.message);
        });
        this.getById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let result = yield news_service_1.default.readById(Number(req.params.newId));
            res.status(result.status).send(result.message);
        });
        this.patchNew = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let result = yield news_service_1.default.patchById(Number(req.params.newId), req.body);
            res.status(result.status).send(result.message);
        });
        this.getNewsByCategoryId = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let result = yield news_service_1.default.getNewsByCategoryId(Number(req.params.categoryId));
            res.status(200).send(result);
        });
    }
}
exports.default = new NewsController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3cy5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY29udHJvbGxlcnMvbmV3cy9uZXdzLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQSwrRUFBc0Q7QUFDdEQsTUFBTSxjQUFjO0lBQXBCO1FBQ0ksYUFBUSxHQUFHLENBQ1AsR0FBb0IsRUFDcEIsR0FBcUIsRUFDdkIsRUFBRTtZQUNBLElBQUksTUFBTSxHQUFHLE1BQU0sc0JBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzVDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2pDLENBQUMsQ0FBQSxDQUFBO1FBQ0QsY0FBUyxHQUFJLENBQ1QsR0FBb0IsRUFDcEIsR0FBcUIsRUFDdkIsRUFBRTtZQUNBLElBQUksTUFBTSxHQUFHLE1BQU0sc0JBQVcsQ0FBQyxNQUFNLENBQUM7Z0JBQ2xDLEtBQUssRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUs7Z0JBQ3JCLE9BQU8sRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU87Z0JBQ3pCLFdBQVcsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7Z0JBQ3pDLFVBQVUsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVU7YUFDbEMsQ0FBQyxDQUFDO1lBQ0gsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNuRCxDQUFDLENBQUEsQ0FBQTtRQUNELFdBQU0sR0FBRyxDQUNMLEdBQW9CLEVBQ3BCLEdBQXFCLEVBQ3ZCLEVBQUU7WUFDQSxJQUFJLE1BQU0sR0FBRyxNQUFNLHNCQUFXLENBQUMsT0FBTyxDQUFDO2dCQUNuQyxLQUFLLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLO2dCQUNyQixPQUFPLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPO2dCQUN6QixXQUFXLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXO2dCQUNqQyxFQUFFLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO2FBQy9CLENBQUMsQ0FBQztZQUNILEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbkQsQ0FBQyxDQUFBLENBQUE7UUFDRCxZQUFPLEdBQUcsQ0FDTixHQUFvQixFQUNwQixHQUFxQixFQUN2QixFQUFFO1lBQ0EsSUFBSSxNQUFNLEdBQUcsTUFBTSxzQkFBVyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ2xFLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFbkQsQ0FBQyxDQUFBLENBQUE7UUFDRCxhQUFRLEdBQUcsQ0FDUCxHQUFvQixFQUNwQixHQUFvQixFQUN0QixFQUFFO1lBQ0EsSUFBSSxNQUFNLEdBQUcsTUFBTSxzQkFBVyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDN0UsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNuRCxDQUFDLENBQUEsQ0FBQTtRQUVELHdCQUFtQixHQUFHLENBQ2xCLEdBQW9CLEVBQ3BCLEdBQXFCLEVBQ3ZCLEVBQUU7WUFDQSxJQUFJLE1BQU0sR0FBSSxNQUFNLHNCQUFXLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUNuRixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNqQyxDQUFDLENBQUEsQ0FBQTtJQUNMLENBQUM7Q0FBQTtBQUVELGtCQUFlLElBQUksY0FBYyxFQUFFLENBQUMifQ==