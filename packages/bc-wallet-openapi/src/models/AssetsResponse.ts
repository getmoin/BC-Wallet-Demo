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
 * @interface AssetsResponse
 */
export interface AssetsResponse {
    /**
     * 
     * @type {Array<Asset>}
     * @memberof AssetsResponse
     */
    assets: Array<Asset>;
}

/**
 * Check if a given object implements the AssetsResponse interface.
 */
export function instanceOfAssetsResponse(value: object): value is AssetsResponse {
    if (!('assets' in value) || value['assets'] === undefined) return false;
    return true;
}

export function AssetsResponseFromJSON(json: any): AssetsResponse {
    return AssetsResponseFromJSONTyped(json, false);
}

export function AssetsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AssetsResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'assets': ((json['assets'] as Array<any>).map(AssetFromJSON)),
    };
}

export function AssetsResponseToJSON(json: any): AssetsResponse {
    return AssetsResponseToJSONTyped(json, false);
}

export function AssetsResponseToJSONTyped(value?: AssetsResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'assets': ((value['assets'] as Array<any>).map(AssetToJSON)),
    };
}

