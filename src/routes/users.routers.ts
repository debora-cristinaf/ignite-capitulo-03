import { Router } from "express";

import { CreateUserController } from "../modules/accounts/useCases/createUser/CreateUserControllers";

const usersRouter = Router();

const createUserController = new CreateUserController();

usersRouter.post("/", createUserController.handle);

export { usersRouter };
