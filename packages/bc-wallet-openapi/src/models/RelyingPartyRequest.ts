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
import type { RelyingPartyType } from './RelyingPartyType';
import {
    RelyingPartyTypeFromJSON,
    RelyingPartyTypeFromJSONTyped,
    RelyingPartyTypeToJSON,
    RelyingPartyTypeToJSONTyped,
} from './RelyingPartyType';

/**
 * 
 * @export
 * @interface RelyingPartyRequest
 */
export interface RelyingPartyRequest {
    /**
     * Name of the relying party
     * @type {string}
     * @memberof RelyingPartyRequest
     */
    name: string;
    /**
     * Detailed description of the relying party
     * @type {string}
     * @memberof RelyingPartyRequest
     */
    description: string;
    /**
     * 
     * @type {RelyingPartyType}
     * @memberof RelyingPartyRequest
     */
    type: RelyingPartyType;
    /**
     * Organization the relying party belongs to
     * @type {string}
     * @memberof RelyingPartyRequest
     */
    organization?: string;
    /**
     * 
     * @type {string}
     * @memberof RelyingPartyRequest
     */
    logo?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof RelyingPartyRequest
     */
    credentialDefinitions: Array<string>;
}



/**
 * Check if a given object implements the RelyingPartyRequest interface.
 */
export function instanceOfRelyingPartyRequest(value: object): value is RelyingPartyRequest {
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('description' in value) || value['description'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('credentialDefinitions' in value) || value['credentialDefinitions'] === undefined) return false;
    return true;
}

export function RelyingPartyRequestFromJSON(json: any): RelyingPartyRequest {
    return RelyingPartyRequestFromJSONTyped(json, false);
}

export function RelyingPartyRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): RelyingPartyRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
        'description': json['description'],
        'type': RelyingPartyTypeFromJSON(json['type']),
        'organization': json['organization'] == null ? undefined : json['organization'],
        'logo': json['logo'] == null ? undefined : json['logo'],
        'credentialDefinitions': json['credentialDefinitions'],
    };
}

export function RelyingPartyRequestToJSON(json: any): RelyingPartyRequest {
    return RelyingPartyRequestToJSONTyped(json, false);
}

export function RelyingPartyRequestToJSONTyped(value?: RelyingPartyRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'description': value['description'],
        'type': RelyingPartyTypeToJSON(value['type']),
        'organization': value['organization'],
        'logo': value['logo'],
        'credentialDefinitions': value['credentialDefinitions'],
    };
}

