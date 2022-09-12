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
const users_dao_1 = __importDefault(require("../repositories/user/dao/users.dao"));
class UsersService {
    constructor() {
        this.create = (resource) => __awaiter(this, void 0, void 0, function* () {
            return users_dao_1.default.addUser(resource);
        });
        this.list = (limit, page) => __awaiter(this, void 0, void 0, function* () {
            return users_dao_1.default.getUsers();
        });
        this.putById = (id, resource) => __awaiter(this, void 0, void 0, function* () {
            return users_dao_1.default.putUserById(id, resource);
        });
        this.readById = (id) => __awaiter(this, void 0, void 0, function* () {
            return users_dao_1.default.getUserById(id);
        });
        this.deleteById = (id) => __awaiter(this, void 0, void 0, function* () {
            return users_dao_1.default.removeUserById(id);
        });
    }
    patchById(id, resource) {
        return __awaiter(this, void 0, void 0, function* () {
            return users_dao_1.default.patchUserById(id, resource);
        });
    }
    getUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return users_dao_1.default.getUserByEmail(email);
        });
    }
}
exports.default = new UsersService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NlcnZpY2VzL3VzZXJzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtRkFBMEQ7QUFNMUQsTUFBTSxZQUFZO0lBQWxCO1FBQ0ksV0FBTSxHQUFHLENBQU8sUUFBdUIsRUFBRSxFQUFFO1lBQ3ZDLE9BQU8sbUJBQVEsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdEMsQ0FBQyxDQUFBLENBQUE7UUFDRCxTQUFJLEdBQUcsQ0FBTyxLQUFhLEVBQUUsSUFBWSxFQUFFLEVBQUU7WUFDekMsT0FBTyxtQkFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQy9CLENBQUMsQ0FBQSxDQUFBO1FBRUQsWUFBTyxHQUFHLENBQU8sRUFBVSxFQUFFLFFBQW9CLEVBQUUsRUFBRTtZQUNqRCxPQUFPLG1CQUFRLENBQUMsV0FBVyxDQUFDLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUM5QyxDQUFDLENBQUEsQ0FBQTtRQUVELGFBQVEsR0FBRyxDQUFPLEVBQVUsRUFBRSxFQUFFO1lBQzVCLE9BQU8sbUJBQVEsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDcEMsQ0FBQyxDQUFBLENBQUE7UUFFRCxlQUFVLEdBQUcsQ0FBTSxFQUFVLEVBQUUsRUFBRTtZQUM3QixPQUFPLG1CQUFRLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQSxDQUFBO0lBVUwsQ0FBQztJQVJTLFNBQVMsQ0FBQyxFQUFVLEVBQUUsUUFBc0I7O1lBQzlDLE9BQU8sbUJBQVEsQ0FBQyxhQUFhLENBQUMsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ2hELENBQUM7S0FBQTtJQUVLLGNBQWMsQ0FBQyxLQUFhOztZQUM5QixPQUFPLG1CQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFDLENBQUM7S0FBQTtDQUVKO0FBRUQsa0JBQWUsSUFBSSxZQUFZLEVBQUUsQ0FBQyJ9