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


/**
 * Types of supported issuers
 * @export
 */
export const IssuerType = {
    Aries: 'ARIES'
} as const;
export type IssuerType = typeof IssuerType[keyof typeof IssuerType];


export function instanceOfIssuerType(value: any): boolean {
    for (const key in IssuerType) {
        if (Object.prototype.hasOwnProperty.call(IssuerType, key)) {
            if (IssuerType[key as keyof typeof IssuerType] === value) {
                return true;
            }
        }
    }
    return false;
}

export function IssuerTypeFromJSON(json: any): IssuerType {
    return IssuerTypeFromJSONTyped(json, false);
}

export function IssuerTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): IssuerType {
    return json as IssuerType;
}

export function IssuerTypeToJSON(value?: IssuerType | null): any {
    return value as any;
}

export function IssuerTypeToJSONTyped(value: any, ignoreDiscriminator: boolean): IssuerType {
    return value as IssuerType;
}

