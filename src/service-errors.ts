type ServiceError = {
    name: string
}

type UserRegisterError = ServiceError & {
    cause: string
}
