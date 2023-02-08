import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { PostgresUsersRepositorys } from "../../repositories/implementations/PostgresUsersRepositorys";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const mailtrapMailProvider = new MailtrapMailProvider()
const postgresUsersRepositorys = new PostgresUsersRepositorys()

const createUserUseCase = new CreateUserUseCase(
    postgresUsersRepositorys,
    mailtrapMailProvider,
)

const createUserController = new CreateUserController(
    createUserUseCase
)

export { createUserUseCase, createUserController }