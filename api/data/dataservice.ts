import { Person } from "../models/Person";

let people: Person[] = [
    {
        id: "1",
        firstName : "Brian",
        lastName: "Sheridan"
    },
    {
        id: "2",
        firstName : "Heidi",
        lastName: "Sheridan"
    }
]

export function GetAllPeople() {
    return people;
}
export function GetPersonById(id: string){
    let person = people.find(x => x.id == id)
    return person;
}
    
