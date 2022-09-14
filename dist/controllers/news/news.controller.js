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
            let result = yield news_service_1.default.create(req.body);
            res.status(result.status).send(result.message);
        });
    }
}
exports.default = new NewsController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3cy5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY29udHJvbGxlcnMvbmV3cy9uZXdzLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQSwrRUFBc0Q7QUFDdEQsTUFBTSxjQUFjO0lBQXBCO1FBQ0ksYUFBUSxHQUFHLENBQ1AsR0FBb0IsRUFDcEIsR0FBcUIsRUFDdkIsRUFBRTtZQUNBLElBQUksTUFBTSxHQUFHLE1BQU0sc0JBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzVDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2pDLENBQUMsQ0FBQSxDQUFBO1FBQ0QsY0FBUyxHQUFJLENBQ1QsR0FBb0IsRUFDcEIsR0FBcUIsRUFDdkIsRUFBRTtZQUNBLElBQUksTUFBTSxHQUFHLE1BQU0sc0JBQVcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2hELEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbkQsQ0FBQyxDQUFBLENBQUE7SUFDTCxDQUFDO0NBQUE7QUFFRCxrQkFBZSxJQUFJLGNBQWMsRUFBRSxDQUFDIn0=