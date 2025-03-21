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
import type { AriesProofRequest } from './AriesProofRequest'
import type { StepAction } from './StepAction'

/**
 *
 * @export
 * @interface AriesOOBAction
 */
export interface AriesOOBAction extends StepAction {
  /**
   *
   * @type {AriesProofRequest}
   * @memberof AriesOOBAction
   */
  proofRequest: AriesProofRequest
}
/**
 * Check if a given object implements the AriesOOBAction interface.
 */
export declare function instanceOfAriesOOBAction(value: object): value is AriesOOBAction
export declare function AriesOOBActionFromJSON(json: any): AriesOOBAction
export declare function AriesOOBActionFromJSONTyped(json: any, ignoreDiscriminator: boolean): AriesOOBAction
export declare function AriesOOBActionToJSON(json: any): AriesOOBAction
export declare function AriesOOBActionToJSONTyped(value?: AriesOOBAction | null, ignoreDiscriminator?: boolean): any
//# sourceMappingURL=AriesOOBAction.d.ts.map
