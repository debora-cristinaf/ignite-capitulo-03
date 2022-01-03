import { inject, injectable } from "tsyringe";

import { Category } from "../../entities/Category";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

@injectable()
class ListCategoriesUseCase {
  constructor(
    @inject("CategoryRepository")
    private categoriesRepository: ICategoriesRepository
  ) {}

  async execute(): Promise<Category[]> {
    return this.categoriesRepository.list();
  }
}

export { ListCategoriesUseCase };
