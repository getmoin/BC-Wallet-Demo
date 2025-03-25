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
import type { Asset } from './Asset';
import {
    AssetFromJSON,
    AssetFromJSONTyped,
    AssetToJSON,
    AssetToJSONTyped,
} from './Asset';

/**
 * 
 * @export
 * @interface AssetResponse
 */
export interface AssetResponse {
    /**
     * 
     * @type {Asset}
     * @memberof AssetResponse
     */
    asset: Asset;
}

/**
 * Check if a given object implements the AssetResponse interface.
 */
export function instanceOfAssetResponse(value: object): value is AssetResponse {
    if (!('asset' in value) || value['asset'] === undefined) return false;
    return true;
}

export function AssetResponseFromJSON(json: any): AssetResponse {
    return AssetResponseFromJSONTyped(json, false);
}

export function AssetResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AssetResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'asset': AssetFromJSON(json['asset']),
    };
}

export function AssetResponseToJSON(json: any): AssetResponse {
    return AssetResponseToJSONTyped(json, false);
}

export function AssetResponseToJSONTyped(value?: AssetResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'asset': AssetToJSON(value['asset']),
    };
}

