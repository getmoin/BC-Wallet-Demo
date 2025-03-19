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
 *
 * @export
 * @interface Id
 */
export interface Id {
  /**
   * item id
   * @type {string}
   * @memberof Id
   */
  id: string
}
/**
 * Check if a given object implements the Id interface.
 */
export declare function instanceOfId(value: object): value is Id
export declare function IdFromJSON(json: any): Id
export declare function IdFromJSONTyped(json: any, ignoreDiscriminator: boolean): Id
export declare function IdToJSON(json: any): Id
export declare function IdToJSONTyped(value?: Id | null, ignoreDiscriminator?: boolean): any
//# sourceMappingURL=Id.d.ts.map
