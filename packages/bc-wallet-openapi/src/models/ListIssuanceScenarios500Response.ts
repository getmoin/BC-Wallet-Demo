/* tslint:disable */
/* eslint-disable */
/**
 * BC Wallet API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ListIssuanceScenarios500Response
 */
export interface ListIssuanceScenarios500Response {
    /**
     * 
     * @type {string}
     * @memberof ListIssuanceScenarios500Response
     */
    message?: string;
}

/**
 * Check if a given object implements the ListIssuanceScenarios500Response interface.
 */
export function instanceOfListIssuanceScenarios500Response(value: object): value is ListIssuanceScenarios500Response {
    return true;
}

export function ListIssuanceScenarios500ResponseFromJSON(json: any): ListIssuanceScenarios500Response {
    return ListIssuanceScenarios500ResponseFromJSONTyped(json, false);
}

export function ListIssuanceScenarios500ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListIssuanceScenarios500Response {
    if (json == null) {
        return json;
    }
    return {
        
        'message': json['message'] == null ? undefined : json['message'],
    };
}

export function ListIssuanceScenarios500ResponseToJSON(json: any): ListIssuanceScenarios500Response {
    return ListIssuanceScenarios500ResponseToJSONTyped(json, false);
}

export function ListIssuanceScenarios500ResponseToJSONTyped(value?: ListIssuanceScenarios500Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'message': value['message'],
    };
}

