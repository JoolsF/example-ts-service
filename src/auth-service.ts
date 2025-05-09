import { randomUUID } from "crypto";
import { User, UserWithId } from "./dto"
import bcrypt from "bcrypt";

type AuthService = {
    registerNewUser(user: User): Promise<UserWithId | UserRegisterError>
}


function getAuthService(): AuthService {
    //TODO implement check for dupe user

    const SALT_ROUNDS = 10;

    const userDb = new Map<string, UserWithId>();

    async function registerNewUser(user: User): Promise<UserWithId> {

        const hashedPassword = await bcrypt.hash(user.password, SALT_ROUNDS)
        const userToPersist: UserWithId = {
            id: randomUUID(),
            username: user.username,
            password: hashedPassword,
        }

        userDb.set(user.username, userToPersist)

        return userToPersist
        
    }

    return {
        registerNewUser
    }
}
