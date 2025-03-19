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
import type { Issuer } from './Issuer'
/**
 *
 * @export
 * @interface IssuerResponse
 */
export interface IssuerResponse {
  /**
   *
   * @type {Issuer}
   * @memberof IssuerResponse
   */
  issuer?: Issuer
}
/**
 * Check if a given object implements the IssuerResponse interface.
 */
export declare function instanceOfIssuerResponse(value: object): value is IssuerResponse
export declare function IssuerResponseFromJSON(json: any): IssuerResponse
export declare function IssuerResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): IssuerResponse
export declare function IssuerResponseToJSON(json: any): IssuerResponse
export declare function IssuerResponseToJSONTyped(value?: IssuerResponse | null, ignoreDiscriminator?: boolean): any
//# sourceMappingURL=IssuerResponse.d.ts.map
