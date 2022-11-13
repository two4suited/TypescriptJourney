import express, {Request,Response} from "express"
import * as PeopleService from "./people.service"
import { BasePerson,Person } from "./person.interface"

export const peopleRouter = express.Router();

peopleRouter.get("/",async(req: Request,res:Response) => {
    console.log("Called Route to get All People")
    try{
        const items: Person[] = await PeopleService.findAll();
        console.log("Called Route to get All People")
        res.status(200).send(items)
    } catch(e) {
        res.status(500).send(e instanceof Error ? e.message : "Unknown error.")
    }
});
peopleRouter.get("/:id", async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);
    console.log(`Called Route to get ${id}`)
    try {
      const item: Person = await PeopleService.find(id);
      
      if (item) {
        return res.status(200).send(item);
      }
  
      res.status(404).send("item not found");
    } catch (e) {
        res.status(500).send(e instanceof Error ? e.message : "Unknown error.")
    }
  });
  peopleRouter.post("/", async (req: Request, res: Response) => {
    try {
      const item: BasePerson = req.body;
      console.log(item);
  
      const newItem = await PeopleService.create(item);
  
      res.status(201).json(newItem);
    } catch (e) {
        res.status(500).send(e instanceof Error ? e.message : "Unknown error.")
    }
  });
  
  // PUT items/:id
  
  peopleRouter.put("/:id", async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);
  
    try {
      const itemUpdate: Person = req.body;
  
      const existingItem: Person = await PeopleService.find(id);
  
      if (existingItem) {
        const updatedItem = await PeopleService.update(id, itemUpdate);
        return res.status(200).json(updatedItem);
      }
  
      const newItem = await PeopleService.create(itemUpdate);
  
      res.status(201).json(newItem);
    } catch (e) {
        res.status(500).send(e instanceof Error ? e.message : "Unknown error.")
    }
  });
  
  // DELETE items/:id
  
  peopleRouter.delete("/:id", async (req: Request, res: Response) => {
    try {
      const id: number = parseInt(req.params.id, 10);
      await PeopleService.remove(id);
      console.log(`Deleted Person with ${id}`)
      res.sendStatus(204);
    } catch (e) {
        res.status(500).send(e instanceof Error ? e.message : "Unknown error.")
    }
  });