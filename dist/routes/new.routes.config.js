"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewsRoutes = void 0;
const common_routes_config_1 = require("../common/common.routes.config");
const news_controller_1 = __importDefault(require("../controllers/news/news.controller"));
const news_middleware_1 = __importDefault(require("../controllers/news/news.middleware"));
const express_validator_1 = require("express-validator");
class NewsRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, "NewRoutes");
    }
    configureRoutes() {
        this.app.get('/news', [
            news_controller_1.default.listNews
        ]);
        this.app.post('/news', [
            (0, express_validator_1.body)('category_id').isNumeric().withMessage("category_id should be number"),
            (0, express_validator_1.body)('category_id').custom((value) => {
                if (Number(value) <= 0) {
                    return Promise.reject("category_id should greater than zero");
                }
                return true;
            }),
            (0, express_validator_1.body)('title').isString().withMessage('title, content should be string'),
            (0, express_validator_1.body)('content').isString().withMessage('code should be string'),
            (0, express_validator_1.body)([
                'title',
                'content',
                'created_by'
            ]).notEmpty().withMessage('Title,Content,Created_By is empty'),
            news_middleware_1.default.verifyBodyFieldsErros,
            news_controller_1.default.createNew
        ]);
        this.app.route(`/news/:newId`)
            .get(news_controller_1.default.getById)
            .delete(news_middleware_1.default.newIsNotFound, news_controller_1.default.deleteNew);
        this.app.get(`/news/by-category/:categoryId`, [
            news_controller_1.default.getNewsByCategoryId
        ]);
        this.app.put(`/news/:newId`, [
            news_middleware_1.default.newIsNotFound,
            news_middleware_1.default.categoryIsNotFound,
            (0, express_validator_1.body)('category_id').isNumeric().withMessage("category_id should be number"),
            (0, express_validator_1.body)('category_id').custom((value) => {
                if (Number(value) <= 0) {
                    return Promise.reject("category_id should greater than zero");
                }
                ;
                return true;
            }).withMessage("category_id should greater than zero"),
            (0, express_validator_1.body)('title').isString().withMessage('title, content should be string'),
            (0, express_validator_1.body)('content').isString().withMessage('code should be string'),
            (0, express_validator_1.body)([
                'title',
                'content'
            ]).notEmpty().withMessage('title or content is empty'),
            news_middleware_1.default.verifyBodyFieldsErros,
            news_controller_1.default.putNew
        ]);
        this.app.patch(`/news/:newId`, [
            news_middleware_1.default.validPatchField,
            news_controller_1.default.patchNew
        ]);
        return this.app;
    }
}
exports.NewsRoutes = NewsRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3LnJvdXRlcy5jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9yb3V0ZXMvbmV3LnJvdXRlcy5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEseUVBQW9FO0FBQ3BFLDBGQUFpRTtBQUVqRSwwRkFBaUU7QUFDakUseURBQXlDO0FBQ3pDLE1BQWEsVUFBVyxTQUFRLHlDQUFrQjtJQUM5QyxZQUFZLEdBQXdCO1FBQ2hDLEtBQUssQ0FBQyxHQUFHLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELGVBQWU7UUFDWCxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUU7WUFDbEIseUJBQWMsQ0FBQyxRQUFRO1NBQzFCLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBQztZQUNsQixJQUFBLHdCQUFJLEVBQUMsYUFBYSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsV0FBVyxDQUFDLDhCQUE4QixDQUFDO1lBQzNFLElBQUEsd0JBQUksRUFBQyxhQUFhLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtnQkFDakMsSUFBRyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUNyQjtvQkFDSSxPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsc0NBQXNDLENBQUMsQ0FBQztpQkFDakU7Z0JBQ0QsT0FBTyxJQUFJLENBQUM7WUFDaEIsQ0FBQyxDQUFDO1lBQ0YsSUFBQSx3QkFBSSxFQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLFdBQVcsQ0FBQyxpQ0FBaUMsQ0FBQztZQUN2RSxJQUFBLHdCQUFJLEVBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsV0FBVyxDQUFDLHVCQUF1QixDQUFDO1lBQy9ELElBQUEsd0JBQUksRUFBQztnQkFDRyxPQUFPO2dCQUNQLFNBQVM7Z0JBQ1QsWUFBWTthQUNmLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxXQUFXLENBQUMsbUNBQW1DLENBQUM7WUFDbEUseUJBQWMsQ0FBQyxxQkFBcUI7WUFDcEMseUJBQWMsQ0FBQyxTQUFTO1NBQzNCLENBQUMsQ0FBQTtRQUVGLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQzthQUM3QixHQUFHLENBQUMseUJBQWMsQ0FBQyxPQUFPLENBQUM7YUFDM0IsTUFBTSxDQUFDLHlCQUFjLENBQUMsYUFBYSxFQUFFLHlCQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFaEUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsK0JBQStCLEVBQUU7WUFDMUMseUJBQWMsQ0FBQyxtQkFBbUI7U0FDckMsQ0FBQyxDQUFBO1FBRUYsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFO1lBQ3pCLHlCQUFjLENBQUMsYUFBYTtZQUM1Qix5QkFBYyxDQUFDLGtCQUFrQjtZQUNqQyxJQUFBLHdCQUFJLEVBQUMsYUFBYSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsV0FBVyxDQUFDLDhCQUE4QixDQUFDO1lBQzNFLElBQUEsd0JBQUksRUFBQyxhQUFhLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtnQkFDakMsSUFBRyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUNyQjtvQkFDSSxPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsc0NBQXNDLENBQUMsQ0FBQztpQkFDakU7Z0JBQUEsQ0FBQztnQkFDRixPQUFPLElBQUksQ0FBQztZQUNoQixDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsc0NBQXNDLENBQUM7WUFDdEQsSUFBQSx3QkFBSSxFQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLFdBQVcsQ0FBQyxpQ0FBaUMsQ0FBQztZQUN2RSxJQUFBLHdCQUFJLEVBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsV0FBVyxDQUFDLHVCQUF1QixDQUFDO1lBQy9ELElBQUEsd0JBQUksRUFBQztnQkFDRyxPQUFPO2dCQUNQLFNBQVM7YUFDWixDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsV0FBVyxDQUFDLDJCQUEyQixDQUFDO1lBQzFELHlCQUFjLENBQUMscUJBQXFCO1lBQ3BDLHlCQUFjLENBQUMsTUFBTTtTQUN4QixDQUFDLENBQUE7UUFFRixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUU7WUFDM0IseUJBQWMsQ0FBQyxlQUFlO1lBQzlCLHlCQUFjLENBQUMsUUFBUTtTQUMxQixDQUFDLENBQUE7UUFDRixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDcEIsQ0FBQztDQUNKO0FBakVELGdDQWlFQyJ9