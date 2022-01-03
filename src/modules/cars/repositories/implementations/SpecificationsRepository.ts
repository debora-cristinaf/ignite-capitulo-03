import { Specification } from "../../entities/Specification";
import {
  ISpecificationsRepository,
  ISpecificationsRepositoryDTO,
} from "../ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository {
  private specifications: Specification[];

  private constructor() {
    this.specifications = [];
  }

  findByName(name: string): Specification {
    const specification = this.specifications.find(
      (specification) => specification.name === name
    );
    return specification;
  }
  list(): Specification[] {
    return this.specifications;
  }
  create({ name, description }: ISpecificationsRepositoryDTO): Specification {
    const specification = new Specification();

    Object.assign(specification, {
      name,
      description,
      created_at: new Date(),
    });

    this.specifications.push(specification);

    return specification;
  }
}

export { SpecificationsRepository };
