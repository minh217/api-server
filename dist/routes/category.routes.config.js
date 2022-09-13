"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryRoutes = void 0;
const common_routes_config_1 = require("../common/common.routes.config");
const categories_controller_1 = __importDefault(require("../controllers/categories/categories.controller"));
const categories_middleware_1 = __importDefault(require("../controllers/categories/categories.middleware"));
class CategoryRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'UsersRoutes');
    }
    configureRoutes() {
        this.app.route(`/categories`)
            .get(categories_controller_1.default.listCategories)
            .post(categories_middleware_1.default.validateRequiredCategoryBodyFields, categories_middleware_1.default.validateCodeDoesntExist, categories_controller_1.default.createCategory);
        this.app.route(`/categories/:categoryId`)
            .all(categories_middleware_1.default.validateCategoryExists)
            .delete(categories_controller_1.default.removeCategory);
        this.app.route(`/categories/:categoryId`)
            .put([
            categories_middleware_1.default.validateRequiredCategoryBodyFields,
            categories_middleware_1.default.validateSameCodeDoesntExist,
            categories_controller_1.default.putCategory
        ]);
        this.app.patch(`/categories/:categoryId`, [
            categories_middleware_1.default.validateSameCodeDoesntExist,
            categories_controller_1.default.patchCategory
        ]);
        return this.app;
    }
}
exports.CategoryRoutes = CategoryRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnkucm91dGVzLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3JvdXRlcy9jYXRlZ29yeS5yb3V0ZXMuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLHlFQUFtRTtBQUNuRSw0R0FBbUY7QUFDbkYsNEdBQW1GO0FBRW5GLE1BQWEsY0FBZSxTQUFRLHlDQUFrQjtJQUVsRCxZQUFZLEdBQXdCO1FBQ2hDLEtBQUssQ0FBQyxHQUFHLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELGVBQWU7UUFDWCxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUM7YUFDNUIsR0FBRyxDQUFDLCtCQUFvQixDQUFDLGNBQWMsQ0FBQzthQUN4QyxJQUFJLENBQ0QsK0JBQW9CLENBQUMsa0NBQWtDLEVBQ3ZELCtCQUFvQixDQUFDLHVCQUF1QixFQUM1QywrQkFBb0IsQ0FBQyxjQUFjLENBQ2xDLENBQUM7UUFDTixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQzthQUNwQyxHQUFHLENBQUMsK0JBQW9CLENBQUMsc0JBQXNCLENBQUM7YUFDaEQsTUFBTSxDQUFDLCtCQUFvQixDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRWpELElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLHlCQUF5QixDQUFDO2FBQ3hDLEdBQUcsQ0FDQTtZQUNJLCtCQUFvQixDQUFDLGtDQUFrQztZQUN2RCwrQkFBb0IsQ0FBQywyQkFBMkI7WUFDaEQsK0JBQW9CLENBQUMsV0FBVztTQUNuQyxDQUNKLENBQUM7UUFFRixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyx5QkFBeUIsRUFDeEM7WUFDSSwrQkFBb0IsQ0FBQywyQkFBMkI7WUFDaEQsK0JBQW9CLENBQUMsYUFBYTtTQUNyQyxDQUFDLENBQUE7UUFDRixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDcEIsQ0FBQztDQUVKO0FBbkNELHdDQW1DQyJ9