"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const routes_1 = require("./routes");
const tsoa_1 = require("tsoa");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = Number(process.env.PORT) || 8080;
console.log("post", process.env.PORT);
app.use((0, cors_1.default)());
app.use(express_1.default.static("static"));
app.use(express_1.default.json());
app.use(express_1.default.raw());
app.use(express_1.default.urlencoded({ extended: true }));
(0, routes_1.RegisterRoutes)(app);
app.use("/swagger", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(undefined, {
    swaggerOptions: {
        url: "/swagger.json",
    },
}));
app.use((err, req, res, next) => {
    if (err instanceof tsoa_1.ValidateError) {
        console.log("app error", err.fields);
        res.status(400).json({
            message: "Validation failed",
            errors: err.fields
        });
    }
    else {
        res.status(500).send("Internal Server Error");
    }
});
app.listen(port, () => console.log(`Application is running on port ${port}`));
