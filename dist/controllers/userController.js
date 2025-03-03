"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const client_1 = require("@prisma/client");
const tsoa_1 = require("tsoa");
const prisma = new client_1.PrismaClient();
let userController = class userController extends tsoa_1.Controller {
    getUserAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield prisma.user.findMany();
            return data;
        });
    }
    getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return "dataById";
        });
    }
    createUser(req) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield prisma.user.create({
                    data: Object.assign({}, req)
                });
                return data;
            }
            catch (error) {
                return error;
            }
        });
    }
};
exports.userController = userController;
__decorate([
    (0, tsoa_1.Get)()
], userController.prototype, "getUserAll", null);
__decorate([
    (0, tsoa_1.Get)("{id}"),
    __param(0, (0, tsoa_1.Path)())
], userController.prototype, "getUserById", null);
__decorate([
    (0, tsoa_1.Post)(),
    __param(0, (0, tsoa_1.Body)())
], userController.prototype, "createUser", null);
exports.userController = userController = __decorate([
    (0, tsoa_1.Route)("user")
], userController);
