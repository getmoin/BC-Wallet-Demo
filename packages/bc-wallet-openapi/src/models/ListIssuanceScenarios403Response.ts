/* tslint:disable */
/* eslint-disable */
/**
 * Credential Showcase API
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
 * @interface ListIssuanceScenarios403Response
 */
export interface ListIssuanceScenarios403Response {
    /**
     * 
     * @type {string}
     * @memberof ListIssuanceScenarios403Response
     */
    message?: string;
}

/**
 * Check if a given object implements the ListIssuanceScenarios403Response interface.
 */
export function instanceOfListIssuanceScenarios403Response(value: object): value is ListIssuanceScenarios403Response {
    return true;
}

export function ListIssuanceScenarios403ResponseFromJSON(json: any): ListIssuanceScenarios403Response {
    return ListIssuanceScenarios403ResponseFromJSONTyped(json, false);
}

export function ListIssuanceScenarios403ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListIssuanceScenarios403Response {
    if (json == null) {
        return json;
    }
    return {
        
        'message': json['message'] == null ? undefined : json['message'],
    };
}

export function ListIssuanceScenarios403ResponseToJSON(json: any): ListIssuanceScenarios403Response {
    return ListIssuanceScenarios403ResponseToJSONTyped(json, false);
}

export function ListIssuanceScenarios403ResponseToJSONTyped(value?: ListIssuanceScenarios403Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'message': value['message'],
    };
}

