import { Specification } from "../entities/Specification";

interface ISpecificationsRepositoryDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  findByName(name: string): Specification;
  list(): Specification[];
  create({ name, description }): ISpecificationsRepositoryDTO;
}

export { ISpecificationsRepository, ISpecificationsRepositoryDTO };
