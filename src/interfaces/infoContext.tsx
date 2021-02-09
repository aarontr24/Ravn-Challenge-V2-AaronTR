

interface IPerson {
    idPerson: String
}

type ContextType = {
    info: IPerson,
    dispatch: ({}) => void
}

export type {
    IPerson,
    ContextType
}
