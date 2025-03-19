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
import type { Asset } from './Asset'
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
  asset: Asset
}
/**
 * Check if a given object implements the AssetResponse interface.
 */
export declare function instanceOfAssetResponse(value: object): value is AssetResponse
export declare function AssetResponseFromJSON(json: any): AssetResponse
export declare function AssetResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AssetResponse
export declare function AssetResponseToJSON(json: any): AssetResponse
export declare function AssetResponseToJSONTyped(value?: AssetResponse | null, ignoreDiscriminator?: boolean): any
//# sourceMappingURL=AssetResponse.d.ts.map
