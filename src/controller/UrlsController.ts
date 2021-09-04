import shortid from "shortid";
import { Request, Response } from "express";

import { UrlService } from "../service/UrlService";

class UrlsController {
  async create(request: Request, response: Response): Promise<Response> {
    const { url } = request.params;
    const urlsService = new UrlService();

    try {
      const urlShort = shortid.generate();
      
      let urlEntity = await urlsService.getByUrl(url);

      if (!urlEntity) {
        urlEntity = await urlsService.create({
          url,
          url_short: urlShort,
        });
      }

      return response.json(urlEntity);
    } catch (err) {
      return response.status(400).json({
        message: err.message,
      });
    }
  }
}

export { UrlsController };
