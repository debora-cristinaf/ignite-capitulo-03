import { inject, injectable } from "tsyringe";

import { Specification } from "../../entities/Specification";
import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

@injectable()
class ListSpecificationsUseCase {
  constructor(
    @inject("SpecificationRepository")
    private specificationsRespository: ISpecificationsRepository
  ) {}

  execute(): Specification[] {
    return this.specificationsRespository.list();
  }
}

export { ListSpecificationsUseCase };
