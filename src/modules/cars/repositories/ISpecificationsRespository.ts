import { Specification } from "../entities/Specification";

interface ISpecificationsRespositoryDTO {
  name: string;
  description: string;
}

interface ISpecificationsRespository {
  findByName(name: string): Specification;
  list(): Specification[];
  create({ name, description }): ISpecificationsRespositoryDTO;
}

export { ISpecificationsRespository, ISpecificationsRespositoryDTO };
