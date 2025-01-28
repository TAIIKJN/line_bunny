"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = Number(process.env.PORT) || 80;
const apikey = process.env.APIKEY || "123456789";
app.use((0, cors_1.default)());
app.use(express_1.default.static("static"));
app.use(express_1.default.json());
app.use(express_1.default.raw());
app.use(express_1.default.urlencoded({ extended: true }));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const routes_1 = require("./routes");
(0, routes_1.RegisterRoutes)(app);
app.use("/swagger", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(undefined, {
    swaggerOptions: {
        url: "/swagger.json",
    },
}));
app.listen(port, () => console.log(`Application is running on port ${port}`));
