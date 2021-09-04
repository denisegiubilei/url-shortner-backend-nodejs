import { getCustomRepository, Repository } from "typeorm";

import { UrlsRepository } from "../repositories/UrlsRepository";
import { Url } from "../entity/Url";

interface UrlCreateData {
  url: string;
  url_short: string;
}

class UrlService {
  private urlsRepository: Repository<Url>;

  constructor() {
    this.urlsRepository = getCustomRepository(UrlsRepository);
  }

  async getByUrl(url: string) {
    const urlEntity = await this.urlsRepository.findOne({ url });
    return urlEntity;
  }

  async getByUrlShort(url_short: string) {
    const urlEntity = await this.urlsRepository.findOne({ url_short });

    if (!urlEntity) {
      throw new Error(`No url was found for url_short: '${url_short}'`);
    }

    return urlEntity;
  }

  async create({ url, url_short }: UrlCreateData) {
    const urlEntity = this.urlsRepository.create({
      url,
      url_short,
    });

    await this.urlsRepository.save(urlEntity);

    return urlEntity;
  }
}

export { UrlService };
