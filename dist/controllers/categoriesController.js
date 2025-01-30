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
exports.categoriesController = void 0;
const tsoa_1 = require("tsoa");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const token = "mTuXUjOm8dKhn805+2xOAOfDoq5NBEzYT9hx+DbF8IFCInIHLZbZ1orjdtyrCADJmsCfKzlJUNZF9kzRw24K9zrPj4tnkJkAAsYJtO0O1eGGWOMAVoB2J2B7R03I/tp+HFYRVVD09GEod/NiCukB4QdB04t89/1O/w1cDnyilFU=";
let categoriesController = class categoriesController extends tsoa_1.Controller {
    getCategoriesAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield prisma.categories.findMany();
                return data;
            }
            catch (error) {
                return error;
            }
        });
    }
    getCategoriesById() {
        return __awaiter(this, void 0, void 0, function* () {
            return "hiiii get by ID";
        });
    }
    createCategories(req) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield prisma.categories.create({
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
exports.categoriesController = categoriesController;
__decorate([
    (0, tsoa_1.Get)()
], categoriesController.prototype, "getCategoriesAll", null);
__decorate([
    (0, tsoa_1.Get)("{id}")
], categoriesController.prototype, "getCategoriesById", null);
__decorate([
    (0, tsoa_1.Post)(),
    __param(0, (0, tsoa_1.Body)())
], categoriesController.prototype, "createCategories", null);
exports.categoriesController = categoriesController = __decorate([
    (0, tsoa_1.Route)("categories")
], categoriesController);
