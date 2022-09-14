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
                    return false;
                }
            }).withMessage("category_id should greater than zero"),
            news_middleware_1.default.verifyBodyFieldsErros,
            news_controller_1.default.createNew
        ]);
        return this.app;
    }
}
exports.NewsRoutes = NewsRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3LnJvdXRlcy5jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9yb3V0ZXMvbmV3LnJvdXRlcy5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEseUVBQW9FO0FBQ3BFLDBGQUFpRTtBQUVqRSwwRkFBaUU7QUFDakUseURBQXlDO0FBQ3pDLE1BQWEsVUFBVyxTQUFRLHlDQUFrQjtJQUM5QyxZQUFZLEdBQXdCO1FBQ2hDLEtBQUssQ0FBQyxHQUFHLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELGVBQWU7UUFDWCxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUU7WUFDbEIseUJBQWMsQ0FBQyxRQUFRO1NBQzFCLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBQztZQUNsQixJQUFBLHdCQUFJLEVBQUMsYUFBYSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsV0FBVyxDQUFDLDhCQUE4QixDQUFDO1lBQzNFLElBQUEsd0JBQUksRUFBQyxhQUFhLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtnQkFDakMsSUFBRyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUNyQjtvQkFDSSxPQUFPLEtBQUssQ0FBQTtpQkFDZjtZQUNMLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxzQ0FBc0MsQ0FBQztZQUN0RCx5QkFBYyxDQUFDLHFCQUFxQjtZQUNwQyx5QkFBYyxDQUFDLFNBQVM7U0FDM0IsQ0FBQyxDQUFBO1FBQ0YsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ3BCLENBQUM7Q0FDSjtBQXZCRCxnQ0F1QkMifQ==