"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryRoutes = void 0;
const common_routes_config_1 = require("../common/common.routes.config");
const categories_controller_1 = __importDefault(require("../controllers/categories/categories.controller"));
const categories_middleware_1 = __importDefault(require("../controllers/categories/categories.middleware"));
const express_validator_1 = require("express-validator");
class CategoryRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'UsersRoutes');
    }
    configureRoutes() {
        this.app.route(`/categories`)
            .get(categories_controller_1.default.listCategories)
            .post([
            (0, express_validator_1.body)('name').isString().withMessage('name should be string'),
            (0, express_validator_1.body)('code').isString().withMessage('code should be string'),
            (0, express_validator_1.body)([
                'name',
                'code'
            ]).notEmpty().withMessage('name or code is empty'),
            categories_middleware_1.default.verifyBodyFieldsErros,
            categories_middleware_1.default.validateCodeDoesntExist,
            categories_controller_1.default.createCategory
        ]);
        this.app.route(`/categories/:categoryId`)
            .all(categories_middleware_1.default.validateCategoryExists)
            .get(categories_controller_1.default.getCategoryById)
            .delete([
            categories_middleware_1.default.validCategoryHasNews,
            categories_controller_1.default.removeCategory
        ]);
        this.app.route(`/categories/:categoryId`)
            .put([
            (0, express_validator_1.body)('name').isString().withMessage('name should be string'),
            (0, express_validator_1.body)('code').isString().withMessage('code should be string'),
            (0, express_validator_1.body)([
                'name',
                'code'
            ]).notEmpty().withMessage('name or code is empty'),
            categories_middleware_1.default.validateSameCodeDoesntExist,
            categories_controller_1.default.putCategory
        ]);
        this.app.patch(`/categories/:categoryId`, [
            categories_middleware_1.default.validRequiredForPatch,
            categories_middleware_1.default.validateSameCodeDoesntExist,
            categories_controller_1.default.patchCategory
        ]);
        return this.app;
    }
}
exports.CategoryRoutes = CategoryRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnkucm91dGVzLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3JvdXRlcy9jYXRlZ29yeS5yb3V0ZXMuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLHlFQUFtRTtBQUNuRSw0R0FBbUY7QUFDbkYsNEdBQW1GO0FBQ25GLHlEQUF1QztBQUN2QyxNQUFhLGNBQWUsU0FBUSx5Q0FBa0I7SUFFbEQsWUFBWSxHQUF3QjtRQUNoQyxLQUFLLENBQUMsR0FBRyxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCxlQUFlO1FBQ1gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDO2FBQzVCLEdBQUcsQ0FBQywrQkFBb0IsQ0FBQyxjQUFjLENBQUM7YUFDeEMsSUFBSSxDQUNEO1lBQ0ksSUFBQSx3QkFBSSxFQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLFdBQVcsQ0FBQyx1QkFBdUIsQ0FBQztZQUM1RCxJQUFBLHdCQUFJLEVBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsV0FBVyxDQUFDLHVCQUF1QixDQUFDO1lBQzVELElBQUEsd0JBQUksRUFBQztnQkFDRCxNQUFNO2dCQUNOLE1BQU07YUFDVCxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsV0FBVyxDQUFDLHVCQUF1QixDQUFDO1lBQ2xELCtCQUFvQixDQUFDLHFCQUFxQjtZQUMxQywrQkFBb0IsQ0FBQyx1QkFBdUI7WUFDNUMsK0JBQW9CLENBQUMsY0FBYztTQUN0QyxDQUNKLENBQUM7UUFFRixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQzthQUNwQyxHQUFHLENBQUMsK0JBQW9CLENBQUMsc0JBQXNCLENBQUM7YUFDaEQsR0FBRyxDQUFDLCtCQUFvQixDQUFDLGVBQWUsQ0FBQzthQUN6QyxNQUFNLENBQ0g7WUFDSSwrQkFBb0IsQ0FBQyxvQkFBb0I7WUFDekMsK0JBQW9CLENBQUMsY0FBYztTQUN0QyxDQUNKLENBQUM7UUFFTixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQzthQUN4QyxHQUFHLENBQ0E7WUFDSSxJQUFBLHdCQUFJLEVBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsV0FBVyxDQUFDLHVCQUF1QixDQUFDO1lBQzVELElBQUEsd0JBQUksRUFBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxXQUFXLENBQUMsdUJBQXVCLENBQUM7WUFDNUQsSUFBQSx3QkFBSSxFQUFDO2dCQUNELE1BQU07Z0JBQ04sTUFBTTthQUNULENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxXQUFXLENBQUMsdUJBQXVCLENBQUM7WUFDbEQsK0JBQW9CLENBQUMsMkJBQTJCO1lBQ2hELCtCQUFvQixDQUFDLFdBQVc7U0FDbkMsQ0FDSixDQUFDO1FBRUYsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMseUJBQXlCLEVBQ3hDO1lBQ0ksK0JBQW9CLENBQUMscUJBQXFCO1lBQzFDLCtCQUFvQixDQUFDLDJCQUEyQjtZQUNoRCwrQkFBb0IsQ0FBQyxhQUFhO1NBQ3JDLENBQUMsQ0FBQTtRQUNGLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNwQixDQUFDO0NBRUo7QUF4REQsd0NBd0RDIn0=