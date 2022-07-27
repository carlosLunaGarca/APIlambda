/* eslint-disable prettier/prettier */
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { SchemaSearch } from '../schemas/SchemaSearch';
import { MergeSort } from '../functions/MergeSort';
import { binarySearch } from './../functions/BinarySearch';

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 *
 */

export const lambdaHandlerBinarySearch = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    let response: APIGatewayProxyResult;
    try {
        const params: SchemaSearch= JSON.parse(event.body!);
        const bs= new binarySearch();
        const sort=new MergeSort(params.ArrayData);
        if(params.sort){
        response = {
            statusCode: 200,
            body: JSON.stringify({
                message: 'Search with binary search',
                body: bs.binarySearch(params.ArrayData,0,params.ArrayData.length-1,params.search)
            }),
        };
    }else{
        
        sort.Sort(params.ArrayData, 0, params.ArrayData.length - 1,sort.indexes);
        const index:number=bs.binarySearch(params.ArrayData,0,params.ArrayData.length-1,params.search);
        if(index>=0){
        response = {
            statusCode: 200,
            body: JSON.stringify({
                message: 'Search with binary search',
                body: sort.indexes[index]

            }),
        };
    }else{
        response = {
            statusCode: 200,
            body: JSON.stringify({
                message: 'Search with binary search, not found data',
                body: -1

            }),
        };
    }
    }
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