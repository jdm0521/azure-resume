import logging
import azure.functions as func
from azure.cosmos import exceptions, CosmosClient, PartitionKey

def main(req: func.HttpRequest, cosmosin: func.DocumentList, cosmosout: func.Out[func.Document]) -> func.HttpResponse:
    logging.info('Python HTTP trigger function processed a request.')

    counter = getNewCounterValue(cosmosin[0]['count']) 
    cosmosin[0]['count'] = counter
    cosmosout.set(func.Document.from_json(cosmosin[0].to_json()))
    if counter:
        return func.HttpResponse(f"{counter}", status_code=200)
    else:
        return func.HttpResponse(
             "Error",
             status_code=500
        )

def getNewCounterValue(value: int):
    return value + 1


