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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterRoutes = RegisterRoutes;
const runtime_1 = require("@tsoa/runtime");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const webhookController_1 = require("./controllers/webhookController");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const userController_1 = require("./controllers/userController");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const productController_1 = require("./controllers/productController");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const orderController_1 = require("./controllers/orderController");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const models = {
    "Record_string.any_": {
        "dataType": "refAlias",
        "type": { "dataType": "nestedObjectLiteral", "nestedProperties": {}, "additionalProperties": { "dataType": "any" }, "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "WebhookPayload": {
        "dataType": "refObject",
        "properties": {
            "destination": { "dataType": "string" },
            "events": { "dataType": "array", "array": { "dataType": "nestedObjectLiteral", "nestedProperties": { "message": { "dataType": "nestedObjectLiteral", "nestedProperties": { "quoteToken": { "dataType": "string" }, "text": { "dataType": "string", "required": true }, "type": { "dataType": "string", "required": true }, "id": { "dataType": "string" } }, "required": true }, "timestamp": { "dataType": "double", "required": true }, "source": { "dataType": "nestedObjectLiteral", "nestedProperties": { "type": { "dataType": "string", "required": true }, "userId": { "dataType": "string", "required": true } }, "required": true }, "replyToken": { "dataType": "string", "required": true }, "type": { "dataType": "string", "required": true }, "webhookEventId": { "dataType": "string" }, "deliveryContext": { "ref": "Record_string.any_" }, "mode": { "dataType": "string" } } }, "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UserData": {
        "dataType": "refObject",
        "properties": {
            "name": { "dataType": "string", "required": true },
            "userId": { "dataType": "string", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ProductData": {
        "dataType": "refObject",
        "properties": {
            "name": { "dataType": "string", "required": true },
            "description": { "dataType": "string", "required": true },
            "price": { "dataType": "string", "required": true },
            "image": { "dataType": "string", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "OrderData": {
        "dataType": "refObject",
        "properties": {
            "total": { "dataType": "string", "required": true },
            "Quantity": { "dataType": "double", "required": true },
            "State": { "dataType": "string", "required": true },
            "productId": { "dataType": "string", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const templateService = new runtime_1.ExpressTemplateService(models, { "noImplicitAdditionalProperties": "throw-on-extras", "bodyCoercion": true });
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
function RegisterRoutes(app) {
    // ###########################################################################################################
    //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
    //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
    // ###########################################################################################################
    const argswebhookController_receiveWebhook = {
        payload: { "in": "body", "name": "payload", "required": true, "ref": "WebhookPayload" },
    };
    app.post('/api/webhook', ...((0, runtime_1.fetchMiddlewares)(webhookController_1.webhookController)), ...((0, runtime_1.fetchMiddlewares)(webhookController_1.webhookController.prototype.receiveWebhook)), function webhookController_receiveWebhook(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argswebhookController_receiveWebhook, request, response });
                const controller = new webhookController_1.webhookController();
                yield templateService.apiHandler({
                    methodName: 'receiveWebhook',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsuserController_getUserAll = {};
    app.get('/api/user', ...((0, runtime_1.fetchMiddlewares)(userController_1.userController)), ...((0, runtime_1.fetchMiddlewares)(userController_1.userController.prototype.getUserAll)), function userController_getUserAll(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsuserController_getUserAll, request, response });
                const controller = new userController_1.userController();
                yield templateService.apiHandler({
                    methodName: 'getUserAll',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsuserController_getUserById = {
        id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
    };
    app.get('/api/user/:id', ...((0, runtime_1.fetchMiddlewares)(userController_1.userController)), ...((0, runtime_1.fetchMiddlewares)(userController_1.userController.prototype.getUserById)), function userController_getUserById(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsuserController_getUserById, request, response });
                const controller = new userController_1.userController();
                yield templateService.apiHandler({
                    methodName: 'getUserById',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsuserController_createUser = {
        req: { "in": "body", "name": "req", "required": true, "ref": "UserData" },
    };
    app.post('/api/user', ...((0, runtime_1.fetchMiddlewares)(userController_1.userController)), ...((0, runtime_1.fetchMiddlewares)(userController_1.userController.prototype.createUser)), function userController_createUser(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsuserController_createUser, request, response });
                const controller = new userController_1.userController();
                yield templateService.apiHandler({
                    methodName: 'createUser',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsproductController_getProductAll = {};
    app.get('/api/product', ...((0, runtime_1.fetchMiddlewares)(productController_1.productController)), ...((0, runtime_1.fetchMiddlewares)(productController_1.productController.prototype.getProductAll)), function productController_getProductAll(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsproductController_getProductAll, request, response });
                const controller = new productController_1.productController();
                yield templateService.apiHandler({
                    methodName: 'getProductAll',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsproductController_getProductById = {};
    app.get('/api/product/:id', ...((0, runtime_1.fetchMiddlewares)(productController_1.productController)), ...((0, runtime_1.fetchMiddlewares)(productController_1.productController.prototype.getProductById)), function productController_getProductById(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsproductController_getProductById, request, response });
                const controller = new productController_1.productController();
                yield templateService.apiHandler({
                    methodName: 'getProductById',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsproductController_createProduct = {
        req: { "in": "body", "name": "req", "required": true, "ref": "ProductData" },
    };
    app.post('/api/product', ...((0, runtime_1.fetchMiddlewares)(productController_1.productController)), ...((0, runtime_1.fetchMiddlewares)(productController_1.productController.prototype.createProduct)), function productController_createProduct(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsproductController_createProduct, request, response });
                const controller = new productController_1.productController();
                yield templateService.apiHandler({
                    methodName: 'createProduct',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsorderController_getOrderAll = {};
    app.get('/api/order', ...((0, runtime_1.fetchMiddlewares)(orderController_1.orderController)), ...((0, runtime_1.fetchMiddlewares)(orderController_1.orderController.prototype.getOrderAll)), function orderController_getOrderAll(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsorderController_getOrderAll, request, response });
                const controller = new orderController_1.orderController();
                yield templateService.apiHandler({
                    methodName: 'getOrderAll',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsorderController_getOrderById = {};
    app.get('/api/order/:id', ...((0, runtime_1.fetchMiddlewares)(orderController_1.orderController)), ...((0, runtime_1.fetchMiddlewares)(orderController_1.orderController.prototype.getOrderById)), function orderController_getOrderById(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsorderController_getOrderById, request, response });
                const controller = new orderController_1.orderController();
                yield templateService.apiHandler({
                    methodName: 'getOrderById',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsorderController_createOrder = {
        req: { "in": "body", "name": "req", "required": true, "ref": "OrderData" },
    };
    app.post('/api/order', ...((0, runtime_1.fetchMiddlewares)(orderController_1.orderController)), ...((0, runtime_1.fetchMiddlewares)(orderController_1.orderController.prototype.createOrder)), function orderController_createOrder(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsorderController_createOrder, request, response });
                const controller = new orderController_1.orderController();
                yield templateService.apiHandler({
                    methodName: 'createOrder',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
