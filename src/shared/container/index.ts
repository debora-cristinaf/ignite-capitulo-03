import { container } from "tsyringe";
import "reflect-metadata";

import { ICategoriesRepository } from "../../modules/cars/repositories/ICategoriesRespository";
import { CategoriesRepository } from "../../modules/cars/repositories/implementations/CategoriesRepository";

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
);
