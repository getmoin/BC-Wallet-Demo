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
import type { IssuerType } from './IssuerType';
import {
    IssuerTypeFromJSON,
    IssuerTypeFromJSONTyped,
    IssuerTypeToJSON,
    IssuerTypeToJSONTyped,
} from './IssuerType';
import type { IdentifierType } from './IdentifierType';
import {
    IdentifierTypeFromJSON,
    IdentifierTypeFromJSONTyped,
    IdentifierTypeToJSON,
    IdentifierTypeToJSONTyped,
} from './IdentifierType';

/**
 * 
 * @export
 * @interface IssuerRequest
 */
export interface IssuerRequest {
    /**
     * Name of the issuer
     * @type {string}
     * @memberof IssuerRequest
     */
    name: string;
    /**
     * Detailed description of the issuer
     * @type {string}
     * @memberof IssuerRequest
     */
    description: string;
    /**
     * 
     * @type {IssuerType}
     * @memberof IssuerRequest
     */
    type: IssuerType;
    /**
     * 
     * @type {IdentifierType}
     * @memberof IssuerRequest
     */
    identifierType?: IdentifierType;
    /**
     * External identifier of this issuer
     * @type {string}
     * @memberof IssuerRequest
     */
    identifier?: string;
    /**
     * Organization the issuer belongs to
     * @type {string}
     * @memberof IssuerRequest
     */
    organization?: string;
    /**
     * 
     * @type {string}
     * @memberof IssuerRequest
     */
    logo?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof IssuerRequest
     */
    credentialDefinitions: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof IssuerRequest
     */
    credentialSchemas: Array<string>;
}



/**
 * Check if a given object implements the IssuerRequest interface.
 */
export function instanceOfIssuerRequest(value: object): value is IssuerRequest {
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('description' in value) || value['description'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('credentialDefinitions' in value) || value['credentialDefinitions'] === undefined) return false;
    if (!('credentialSchemas' in value) || value['credentialSchemas'] === undefined) return false;
    return true;
}

export function IssuerRequestFromJSON(json: any): IssuerRequest {
    return IssuerRequestFromJSONTyped(json, false);
}

export function IssuerRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): IssuerRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
        'description': json['description'],
        'type': IssuerTypeFromJSON(json['type']),
        'identifierType': json['identifierType'] == null ? undefined : IdentifierTypeFromJSON(json['identifierType']),
        'identifier': json['identifier'] == null ? undefined : json['identifier'],
        'organization': json['organization'] == null ? undefined : json['organization'],
        'logo': json['logo'] == null ? undefined : json['logo'],
        'credentialDefinitions': json['credentialDefinitions'],
        'credentialSchemas': json['credentialSchemas'],
    };
}

export function IssuerRequestToJSON(json: any): IssuerRequest {
    return IssuerRequestToJSONTyped(json, false);
}

export function IssuerRequestToJSONTyped(value?: IssuerRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'description': value['description'],
        'type': IssuerTypeToJSON(value['type']),
        'identifierType': IdentifierTypeToJSON(value['identifierType']),
        'identifier': value['identifier'],
        'organization': value['organization'],
        'logo': value['logo'],
        'credentialDefinitions': value['credentialDefinitions'],
        'credentialSchemas': value['credentialSchemas'],
    };
}

