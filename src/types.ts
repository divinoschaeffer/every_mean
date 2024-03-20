export interface Mark {
    name: string,
    mark: number,
    coefficient: number,
    _id: string
}

export interface Group {
    _id: string,
    name: string,
    marks: [Mark],
    coefficient: number,
    groups: [Group],
    predecessor: string,
    level: number,
    owner: string,
    __v: number
}

export interface User {
    _id: string,
    email: string,
    groups: [Group]
}

export interface formUser {
    email: string,
    password: string
}