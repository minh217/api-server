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
const express_validator_1 = require("express-validator");
const categories_service_1 = __importDefault(require("../../services/categories.service"));
const news_service_1 = __importDefault(require("../../services/news.service"));
class NewsMiddleware {
    constructor() {
        this.verifyBodyFieldsErros = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const error = (0, express_validator_1.validationResult)(req);
            if (!error.isEmpty()) {
                return res.status(400).send({ error: error.array() });
            }
            next();
        });
        this.newIsNotFound = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let ob = yield news_service_1.default.readById(Number(req.params.newId));
            if (ob === null) {
                res.status(404).send("New Is Not Found");
            }
            else {
                next();
            }
        });
        this.categoryIsNotFound = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let category = yield categories_service_1.default.readById(req.body.category_id);
            if (category === null) {
                res.status(404).send("Category Is Not Found");
            }
            else {
                next();
            }
        });
        this.validPatchField = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            if (req.body.title || req.body.content || req.body.images || req.body.category_id) {
                next();
            }
            else {
                res.status(400).send("Invalid Field");
            }
        });
    }
}
exports.default = new NewsMiddleware();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3cy5taWRkbGV3YXJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY29udHJvbGxlcnMvbmV3cy9uZXdzLm1pZGRsZXdhcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQSx5REFBbUQ7QUFDbkQsMkZBQWtFO0FBQ2xFLCtFQUFzRDtBQUN0RCxNQUFNLGNBQWM7SUFBcEI7UUFDSSwwQkFBcUIsR0FBRyxDQUNwQixHQUFvQixFQUNwQixHQUFxQixFQUNyQixJQUEwQixFQUM1QixFQUFFO1lBQ0EsTUFBTSxLQUFLLEdBQUcsSUFBQSxvQ0FBZ0IsRUFBQyxHQUFHLENBQUMsQ0FBQztZQUNwQyxJQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxFQUNuQjtnQkFDSSxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBQyxDQUFDLENBQUM7YUFDdkQ7WUFDRCxJQUFJLEVBQUUsQ0FBQztRQUNYLENBQUMsQ0FBQSxDQUFBO1FBQ0Qsa0JBQWEsR0FBRyxDQUNaLEdBQW9CLEVBQ3BCLEdBQXFCLEVBQ3JCLElBQTBCLEVBQzVCLEVBQUU7WUFDQSxJQUFJLEVBQUUsR0FBRyxNQUFNLHNCQUFXLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDOUQsSUFBRyxFQUFFLEtBQUssSUFBSSxFQUFDO2dCQUNYLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7YUFDNUM7aUJBQUk7Z0JBQ0QsSUFBSSxFQUFFLENBQUM7YUFDVjtRQUNMLENBQUMsQ0FBQSxDQUFBO1FBRUQsdUJBQWtCLEdBQUcsQ0FDakIsR0FBb0IsRUFDcEIsR0FBcUIsRUFDckIsSUFBMEIsRUFDNUIsRUFBRTtZQUNBLElBQUksUUFBUSxHQUFHLE1BQU0sNEJBQWlCLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDdEUsSUFBRyxRQUFRLEtBQUssSUFBSSxFQUFDO2dCQUNqQixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO2FBQ2pEO2lCQUFJO2dCQUNELElBQUksRUFBRSxDQUFDO2FBQ1Y7UUFDTCxDQUFDLENBQUEsQ0FBQTtRQUVELG9CQUFlLEdBQUcsQ0FDZCxHQUFvQixFQUNwQixHQUFxQixFQUNyQixJQUEwQixFQUM1QixFQUFFO1lBQ0EsSUFBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFDaEY7Z0JBQ0ksSUFBSSxFQUFFLENBQUM7YUFDVjtpQkFBSTtnQkFDRCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQzthQUN6QztRQUNMLENBQUMsQ0FBQSxDQUFBO0lBQ0wsQ0FBQztDQUFBO0FBRUQsa0JBQWUsSUFBSSxjQUFjLEVBQUUsQ0FBQyJ9