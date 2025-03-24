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
 * @interface AssetRequest
 */
export interface AssetRequest {
    /**
     * Type of asset (e.g., image, document, icon)
     * @type {string}
     * @memberof AssetRequest
     */
    mediaType: string;
    /**
     * Binary data of the asset
     * @type {string}
     * @memberof AssetRequest
     */
    content: string;
    /**
     * Name of the asset file
     * @type {string}
     * @memberof AssetRequest
     */
    fileName?: string;
    /**
     * Description of the asset
     * @type {string}
     * @memberof AssetRequest
     */
    description?: string;
}

/**
 * Check if a given object implements the AssetRequest interface.
 */
export function instanceOfAssetRequest(value: object): value is AssetRequest {
    if (!('mediaType' in value) || value['mediaType'] === undefined) return false;
    if (!('content' in value) || value['content'] === undefined) return false;
    return true;
}

export function AssetRequestFromJSON(json: any): AssetRequest {
    return AssetRequestFromJSONTyped(json, false);
}

export function AssetRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AssetRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'mediaType': json['mediaType'],
        'content': json['content'],
        'fileName': json['fileName'] == null ? undefined : json['fileName'],
        'description': json['description'] == null ? undefined : json['description'],
    };
}

export function AssetRequestToJSON(json: any): AssetRequest {
    return AssetRequestToJSONTyped(json, false);
}

export function AssetRequestToJSONTyped(value?: AssetRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'mediaType': value['mediaType'],
        'content': value['content'],
        'fileName': value['fileName'],
        'description': value['description'],
    };
}

