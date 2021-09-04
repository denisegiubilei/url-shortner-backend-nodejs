import { EntityRepository, Repository } from "typeorm";

import { Url } from "../entity/Url";

@EntityRepository(Url)
class UrlsRepository extends Repository<Url> {}

export { UrlsRepository };
