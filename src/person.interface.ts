export interface BasePerson {
    firstName: string;
    lastName: string;
    age: number
}

export interface Person extends BasePerson {
    id: number;
}