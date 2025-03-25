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
import type { CredentialSchema } from './CredentialSchema';
import {
    CredentialSchemaFromJSON,
    CredentialSchemaFromJSONTyped,
    CredentialSchemaToJSON,
    CredentialSchemaToJSONTyped,
} from './CredentialSchema';

/**
 * 
 * @export
 * @interface CredentialSchemasResponse
 */
export interface CredentialSchemasResponse {
    /**
     * List of credential schemas
     * @type {Array<CredentialSchema>}
     * @memberof CredentialSchemasResponse
     */
    credentialSchemas?: Array<CredentialSchema>;
}

/**
 * Check if a given object implements the CredentialSchemasResponse interface.
 */
export function instanceOfCredentialSchemasResponse(value: object): value is CredentialSchemasResponse {
    return true;
}

export function CredentialSchemasResponseFromJSON(json: any): CredentialSchemasResponse {
    return CredentialSchemasResponseFromJSONTyped(json, false);
}

export function CredentialSchemasResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CredentialSchemasResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'credentialSchemas': json['credentialSchemas'] == null ? undefined : ((json['credentialSchemas'] as Array<any>).map(CredentialSchemaFromJSON)),
    };
}

export function CredentialSchemasResponseToJSON(json: any): CredentialSchemasResponse {
    return CredentialSchemasResponseToJSONTyped(json, false);
}

export function CredentialSchemasResponseToJSONTyped(value?: CredentialSchemasResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'credentialSchemas': value['credentialSchemas'] == null ? undefined : ((value['credentialSchemas'] as Array<any>).map(CredentialSchemaToJSON)),
    };
}

