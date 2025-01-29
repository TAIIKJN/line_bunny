import cors from "cors";
import express, { Express, NextFunction, Request, Response } from "express";
import dotenv from "dotenv"
import swaggerUi from "swagger-ui-express";
import { RegisterRoutes } from "./routes";
import { ValidateError } from "tsoa";
dotenv.config();

const app: Express = express();
const port = Number(process.env.PORT) || 8080;
console.log("post",process.env.PORT);

app.use(cors());

app.use(express.static("static"));
app.use(express.json());
app.use(express.raw());
app.use(express.urlencoded({ extended: true }));


RegisterRoutes(app);
app.use(
  "/swagger",
  swaggerUi.serve,
  swaggerUi.setup(undefined, {
    swaggerOptions: {
      url: "/swagger.json",
    },
  })
);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof ValidateError) {
      console.log("app error",err.fields);
      res.status(400).json({
          message: "Validation failed",
          errors: err.fields
      });
  } else {
      res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => console.log(`Application is running on port ${port}`));
