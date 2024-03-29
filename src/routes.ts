import { Router } from "express";
import { UrlsController } from "./controller/UrlsController";

const routes = Router();

const urlsController = new UrlsController();

routes.get("/top-urls", urlsController.listByViews);

routes.post("/:url", urlsController.create);
routes.get("/:url_short", urlsController.redirectToUrl);


export { routes };
