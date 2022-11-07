import { BasePerson,Person } from "./person.interface";
import { People } from "./people.interface";

let people: People ={
    1: {
        id: 1,
        firstName: "Brian",
        lastName: "Sheridan",
        age: 46
    },
    2: {
        id: 2,
        firstName: "Heidi",
        lastName: "Sheridan",
        age: 44
    },
}

export const findAll = async () : Promise<Person[]> => Object.values(people);
export const find = async (id: number): Promise<Person> => people[id];
export const create = async (newItem: BasePerson): Promise<Person> => {
    const id = new Date().valueOf();
  
    people[id] = {
      id,
      ...newItem
    };
  
    return people[id];
  };
  export const update = async (
    id: number,
    itemUpdate: BasePerson
  ): Promise<Person | null> => {
    const item = await find(id);
  
    if (!item) {
      return null;
    }
  
    people[id] = { id, ...itemUpdate };
  
    return people[id];
  };
  export const remove = async (id: number): Promise<null | void> => {
    const item = await find(id);
  
    if (!item) {
      return null;
    }
  
    delete people[id];
  };