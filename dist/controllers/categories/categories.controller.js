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
const categories_service_1 = __importDefault(require("../../services/categories.service"));
class CategoriesController {
    constructor() {
        this.listCategories = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const categories = yield categories_service_1.default.list(100, 0);
            res.status(200).send(categories);
        });
        this.getCategoryById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const category = yield categories_service_1.default.readById(req.body.id);
            res.status(200).send(category);
        });
        this.createCategory = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let result = yield categories_service_1.default.create(req.body);
            res.status(result.status).send(result.message);
        });
        this.putCategory = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let result = yield categories_service_1.default.putById(Object.assign(Object.assign({}, req.body), { id: req.params.categoryId }));
            res.status(result.status).send(result.message);
        });
        this.removeCategory = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let result = yield categories_service_1.default.deleteById(Number(req.params.categoryId));
            res.status(result.status).send(result.message);
        });
        this.patchCategory = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let result = yield categories_service_1.default.patchById(Number(req.params.categoryId), req.body);
            res.status(result.status).send(result.message);
        });
    }
}
exports.default = new CategoriesController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcmllcy5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY29udHJvbGxlcnMvY2F0ZWdvcmllcy9jYXRlZ29yaWVzLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQSwyRkFBa0U7QUFDbEUsTUFBTSxvQkFBb0I7SUFBMUI7UUFDSSxtQkFBYyxHQUFHLENBQU8sR0FBb0IsRUFBRSxHQUFxQixFQUFFLEVBQUU7WUFDbkUsTUFBTSxVQUFVLEdBQUcsTUFBTSw0QkFBaUIsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3hELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3JDLENBQUMsQ0FBQSxDQUFDO1FBQ0Ysb0JBQWUsR0FBRyxDQUFPLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxFQUFFO1lBQ3BFLE1BQU0sUUFBUSxHQUFHLE1BQU0sNEJBQWlCLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDL0QsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbkMsQ0FBQyxDQUFBLENBQUE7UUFDRCxtQkFBYyxHQUFHLENBQU8sR0FBb0IsRUFBRSxHQUFxQixFQUFFLEVBQUU7WUFDbkUsSUFBSSxNQUFNLEdBQUcsTUFBTSw0QkFBaUIsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3RELEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbkQsQ0FBQyxDQUFBLENBQUE7UUFDRCxnQkFBVyxHQUFHLENBQU8sR0FBb0IsRUFBRSxHQUFxQixFQUFFLEVBQUU7WUFDaEUsSUFBSSxNQUFNLEdBQUcsTUFBTSw0QkFBaUIsQ0FBQyxPQUFPLGlDQUFLLEdBQUcsQ0FBQyxJQUFJLEtBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsVUFBVSxJQUFFLENBQUM7WUFDdkYsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNuRCxDQUFDLENBQUEsQ0FBQTtRQUNELG1CQUFjLEdBQUcsQ0FBTyxHQUFvQixFQUFFLEdBQXFCLEVBQUUsRUFBRTtZQUNuRSxJQUFJLE1BQU0sR0FBRyxNQUFNLDRCQUFpQixDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQy9FLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbkQsQ0FBQyxDQUFBLENBQUE7UUFDRCxrQkFBYSxHQUFHLENBQU8sR0FBb0IsRUFBRSxHQUFxQixFQUFFLEVBQUU7WUFDbEUsSUFBSSxNQUFNLEdBQUcsTUFBTSw0QkFBaUIsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3hGLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbkQsQ0FBQyxDQUFBLENBQUE7SUFDTCxDQUFDO0NBQUE7QUFDRCxrQkFBZSxJQUFJLG9CQUFvQixFQUFFLENBQUMifQ==