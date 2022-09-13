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
const express_validator_1 = require("express-validator");
class CategoryMiddleware {
    verifyBodyFieldsErros(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const error = (0, express_validator_1.validationResult)(req);
            if (!error.isEmpty()) {
                return res.status(400).send({ error: error.array() });
            }
            next();
        });
    }
    validateRequiredCategoryBodyFields(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            if (req.body && req.body.code && req.body.name) {
                next();
            }
            else {
                res.status(400).send({
                    error: `Missing required fields code and name`
                });
            }
        });
    }
    validateCodeDoesntExist(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const category = yield categories_service_1.default.getCategoryByCode(req.body.code);
            if (category) {
                res.status(400).send({ error: `Category Code already exists` });
            }
            else {
                next();
            }
        });
    }
    validateSameCodeDoesntExist(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const category = yield categories_service_1.default.getCategorySameCode(req.body.code, Number(req.params.categoryId));
            if (category) {
                res.status(400).send({ error: `Category Code already exists` });
            }
            else {
                next();
            }
        });
    }
    validateCategoryExists(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const category = yield categories_service_1.default.readById(Number(req.params.categoryId));
            if (category !== null) {
                next();
            }
            else {
                res.status(404).send({
                    error: `Category ${req.params.categoryId} not found`,
                });
            }
        });
    }
    validRequiredForPatch(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            if (req.body.code || req.body.name) {
                next();
            }
            else {
                res.status(400).send({
                    error: `Missing fields`
                });
            }
        });
    }
    validCategoryHasNews(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const news = yield categories_service_1.default.checkCategoryHaseNews(Number(req.params.categoryId));
            if (news === null) {
                next();
            }
            else {
                res.status(404).send({
                    error: `Category ${req.params.categoryId} has news`,
                });
            }
        });
    }
}
exports.default = new CategoryMiddleware();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcmllcy5taWRkbGV3YXJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY29udHJvbGxlcnMvY2F0ZWdvcmllcy9jYXRlZ29yaWVzLm1pZGRsZXdhcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQSwyRkFBa0U7QUFDbEUseURBQW1EO0FBQ25ELE1BQU0sa0JBQWtCO0lBQ2QscUJBQXFCLENBQ3ZCLEdBQW9CLEVBQ3BCLEdBQXFCLEVBQ3JCLElBQTBCOztZQUUxQixNQUFNLEtBQUssR0FBRyxJQUFBLG9DQUFnQixFQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3BDLElBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLEVBQUM7Z0JBQ2hCLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFDLENBQUMsQ0FBQzthQUN2RDtZQUNELElBQUksRUFBRSxDQUFDO1FBQ1gsQ0FBQztLQUFBO0lBQ0ssa0NBQWtDLENBQ3BDLEdBQW9CLEVBQ3BCLEdBQXFCLEVBQ3JCLElBQTBCOztZQUUxQixJQUFHLEdBQUcsQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQzdDO2dCQUNJLElBQUksRUFBRSxDQUFDO2FBQ1Y7aUJBQUk7Z0JBQ0QsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7b0JBQ2pCLEtBQUssRUFBRSx1Q0FBdUM7aUJBQ2pELENBQUMsQ0FBQzthQUNOO1FBQ0wsQ0FBQztLQUFBO0lBRUssdUJBQXVCLENBQ3pCLEdBQW9CLEVBQ3BCLEdBQXFCLEVBQ3JCLElBQTBCOztZQUUxQixNQUFNLFFBQVEsR0FBRyxNQUFNLDRCQUFpQixDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxJ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