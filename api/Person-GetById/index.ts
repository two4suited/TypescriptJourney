import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { GetPersonById } from "../data/dataservice";
import { CreateJsonResponse } from "../helpers/httpTriggerHelper";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');  
    let id = context.bindingData.id
    let person = GetPersonById(id)
    context = CreateJsonResponse(context,person)

};

export default httpTrigger;