import {  Context } from "@azure/functions"

export function CreateJsonResponse<T>(context: Context, model:T) : Context {
    context.res.contentType = "application/json"
    context.res.body = model

    return context
}

