/* eslint-disable prettier/prettier */
import { DataArray } from './../schemas/SchemaArray';
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { MergeSort } from '../functions/MergeSort';

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 *
 */

export const lambdaHandlerSort = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    let response: APIGatewayProxyResult;
    
    try {
    
        const params: DataArray= JSON.parse(event.body!);
       const sort=new MergeSort(params.DataList);
        sort.Sort(params.DataList, 0, params.DataList.length - 1,sort.indexes)
        
        response = {
            statusCode: 200,
            body: JSON.stringify({
                message: 'Sort with merge sort',
                body: params
            }),
        };
    } catch (err) {
        console.log(err);
        response = {
            statusCode: 500,
            body: JSON.stringify({
                message: 'some error happened',
            }),
        };
    }

    return response;
};
