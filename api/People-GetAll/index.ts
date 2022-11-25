import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { GetAllPeople } from "../data/dataservice";
import { CreateJsonResponse } from "../helpers/httpTriggerHelper";
import { Person } from "../models/Person";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
   
    let people = GetAllPeople()
   
    context = CreateJsonResponse(context,people)
    
};

export default httpTrigger;