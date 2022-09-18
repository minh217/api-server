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
const shortid_1 = __importDefault(require("shortid"));
const debug_1 = __importDefault(require("debug"));
const connection_1 = require("../../../common/connection");
const common_messages_1 = require("../../../common/messages/common.messages");
const log = (0, debug_1.default)('app:in-memory-dao');
class UsersDao {
    constructor() {
        this.users = [];
        log('Create new instance of UserDao');
    }
    addUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            user.id = shortid_1.default.generate();
            connection_1.db.query('INSERT INTO users(id,email,password,"lastName", "firstName") VALUES($1,$2,$3,$4,$5)', [
                user.id,
                user.email,
                user.password,
                user.lastName,
                user.firstName
            ]);
            return user.id;
        });
    }
    getUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield connection_1.db.query('Select * From users');
        });
    }
    getUserById(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield connection_1.db.query(`Select * From users where id = '${userId}'`);
        });
    }
    putUserById(userId, user) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = common_messages_1.CommonMessages.updateSuccessfully;
            yield connection_1.db.query('UPDATE users SET "firstName" = $2, "lastName" = $3, "permissionLevel" = $4 WHERE id = $1', [
                userId,
                user.firstName,
                user.lastName,
                user.permissionLevel
            ]).catch((error) => { console.log(error); result = common_messages_1.CommonMessages.serverError; });
            return result;
        });
    }
    patchUserById(userId, user) {
        return __awaiter(this, void 0, void 0, function* () {
            const objIndex = this.users.findIndex((obj) => obj.id === userId);
            let currentUser = this.users[objIndex];
            const allowedPatchFields = [
                'email',
                'firstName',
                'lastName',
                'permissionLevel',
            ];
            for (let field of allowedPatchFields) {
                if (field in user) {
                    currentUser = Object.assign(Object.assign({}, currentUser), { [field]: user[field] });
                }
            }
            this.users.splice(objIndex, 1, currentUser);
            return `${user.id} patched`;
        });
    }
    removeUserById(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const objIndex = this.users.findIndex((obj) => obj.id === userId);
            this.users.splice(objIndex, 1);
            return `${userId} removed`;
        });
    }
    getUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const objIndex = this.users.findIndex((obj) => obj.email === email);
            let currentUser = this.users[objIndex];
            if (currentUser) {
                return currentUser;
            }
            else {
                return null;
            }
        });
    }
}
exports.default = new UsersDao;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuZGFvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcmVwb3NpdG9yaWVzL3VzZXIvZGFvL3VzZXJzLmRhby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUdBLHNEQUE4QjtBQUM5QixrREFBMEI7QUFDMUIsMkRBQWdEO0FBQ2hELDhFQUEwRTtBQUMxRSxNQUFNLEdBQUcsR0FBb0IsSUFBQSxlQUFLLEVBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUV4RCxNQUFNLFFBQVE7SUFHVjtRQUZBLFVBQUssR0FBeUIsRUFBRSxDQUFDO1FBRzdCLEdBQUcsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFSyxPQUFPLENBQUMsSUFBbUI7O1lBQzdCLElBQUksQ0FBQyxFQUFFLEdBQUcsaUJBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUM3QixlQUFFLENBQUMsS0FBSyxDQUNKLHFGQUFxRixFQUNyRjtnQkFDSSxJQUFJLENBQUMsRUFBRTtnQkFDUCxJQUFJLENBQUMsS0FBSztnQkFDVixJQUFJLENBQUMsUUFBUTtnQkFDYixJQUFJLENBQUMsUUFBUTtnQkFDYixJQUFJLENBQUMsU0FBUzthQUNqQixDQUNKLENBQUE7WUFDRCxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDbkIsQ0FBQztLQUFBO0lBRUssUUFBUTs7WUFDVixPQUFPLE1BQU0sZUFBRSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQ2pELENBQUM7S0FBQTtJQUVLLFdBQVcsQ0FBQyxNQUFjOztZQUM1QixPQUFPLE1BQU0sZUFBRSxDQUFDLEtBQUssQ0FBQyxtQ0FBbUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUN4RSxDQUFDO0tBQUE7SUFFSyxXQUFXLENBQUMsTUFBYyxFQUFFLElBQWdCOztZQUM5QyxJQUFJLE1BQU0sR0FBRyxnQ0FBYyxDQUFDLGtCQUFrQixDQUFBO1lBQzlDLE1BQU0sZUFBRSxDQUFDLEtBQUssQ0FBQywwRkFBMEYsRUFDekc7Z0JBQ0ksTUFBTTtnQkFDTixJQUFJLENBQUMsU0FBUztnQkFDZCxJQUFJLENBQUMsUUFBUTtnQkFDYixJQUFJLENBQUMsZUFBZTthQUN2QixDQUNBLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLGdDQUFjLENBQUMsV0FBVyxDQUFFLENBQUEsQ0FBQyxDQUFDLENBQUM7WUFDakYsT0FBTyxNQUFNLENBQUM7UUFDbEIsQ0FBQztLQUFBO0lBRUssYUFBYSxDQUFDLE1BQWMsRUFBRSxJQUFrQjs7WUFDbEQsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQ2pDLENBQUMsR0FBbUIsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxNQUFNLENBQzdDLENBQUM7WUFFRixJQUFJLFdBQVcsR0FBa0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN0RCxNQUFNLGtCQUFrQixHQUFHO2dCQUN2QixPQUFPO2dCQUNQLFdBQVc7Z0JBQ1gsVUFBVTtnQkFDVixpQkFBaUI7YUFDcEIsQ0FBQztZQUVGLEtBQUksSUFBSSxLQUFLLElBQUksa0JBQWtCLEVBQUM7Z0JBQ2hDLElBQUcsS0FBSyxJQUFJLElBQUksRUFBQztvQkFDYixXQUFXLG1DQUFPLFdBQVcsS0FBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUF5QixDQUFDLEdBQUMsQ0FBQTtpQkFDM0U7YUFDSjtZQUVELElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFDNUMsT0FBTyxHQUFHLElBQUksQ0FBQyxFQUFFLFVBQVUsQ0FBQztRQUNoQyxDQUFDO0tBQUE7SUFFSyxjQUFjLENBQUMsTUFBYzs7WUFDL0IsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQ2pDLENBQUMsR0FBbUIsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxNQUFNLENBQzdDLENBQUM7WUFDRixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDL0IsT0FBTyxHQUFHLE1BQU0sVUFBVSxDQUFDO1FBQy9CLENBQUM7S0FBQTtJQUVLLGNBQWMsQ0FBQyxLQUFhOztZQUM5QixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FDakMsQ0FBQyxHQUFzQixFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxLQUFLLEtBQUssQ0FDbEQsQ0FBQztZQUNGLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdkMsSUFBSSxXQUFXLEVBQUU7Z0JBQ2IsT0FBTyxXQUFXLENBQUM7YUFDdEI7aUJBQU07Z0JBQ0gsT0FBTyxJQUFJLENBQUM7YUFDZjtRQUNMLENBQUM7S0FBQTtDQUNKO0FBR0Qsa0JBQWUsSUFBSSxRQUFRLENBQUMifQ==