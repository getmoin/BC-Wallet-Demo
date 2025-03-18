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
import type { AriesRequestCredentialAttributes } from './AriesRequestCredentialAttributes'
import type { AriesRequestCredentialPredicates } from './AriesRequestCredentialPredicates'

/**
 *
 * @export
 * @interface AriesProofRequest
 */
export interface AriesProofRequest {
  /**
   * Map of attribute groups requested in the proof
   * @type {{ [key: string]: AriesRequestCredentialAttributes; }}
   * @memberof AriesProofRequest
   */
  attributes: {
    [key: string]: AriesRequestCredentialAttributes
  }
  /**
   * Map of predicate groups requested in the proof
   * @type {{ [key: string]: AriesRequestCredentialPredicates; }}
   * @memberof AriesProofRequest
   */
  predicates: {
    [key: string]: AriesRequestCredentialPredicates
  }
  /**
   * Date and time the Aries proof request was created
   * @type {Date}
   * @memberof AriesProofRequest
   */
  createdAt: Date
  /**
   * Date and time the Aries proof request was last updated
   * @type {Date}
   * @memberof AriesProofRequest
   */
  updatedAt: Date
}
/**
 * Check if a given object implements the AriesProofRequest interface.
 */
export declare function instanceOfAriesProofRequest(value: object): value is AriesProofRequest
export declare function AriesProofRequestFromJSON(json: any): AriesProofRequest
export declare function AriesProofRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AriesProofRequest
export declare function AriesProofRequestToJSON(json: any): AriesProofRequest
export declare function AriesProofRequestToJSONTyped(
  value?: AriesProofRequest | null,
  ignoreDiscriminator?: boolean
): any
//# sourceMappingURL=AriesProofRequest.d.ts.map
