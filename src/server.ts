import express from "express";
import { createConnection } from "typeorm";
import { UrlsController } from "./controller/UrlsController";

createConnection();

const app = express();

app.use(express.json());

const urlsController = new UrlsController();

app.get("/shortner/:url_short", urlsController.redirectToUrl);
app.post("/shortner/:url", urlsController.create);

app.get("/ping", (_, res) => res.json({ pong: true }));

app.listen(process.env.PORT || 3333, () =>
  console.log(`Server is running on port ${process.env.PORT || 3333}`)
);
