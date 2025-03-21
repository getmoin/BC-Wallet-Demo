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
import type { StepRequestActionsInner } from './StepRequestActionsInner'
import type { StepType } from './StepType'

/**
 *
 * @export
 * @interface StepRequest
 */
export interface StepRequest {
  /**
   * Title of the step
   * @type {string}
   * @memberof StepRequest
   */
  title: string
  /**
   * Detailed description of the step
   * @type {string}
   * @memberof StepRequest
   */
  description: string
  /**
   * Order of the step in the scenario
   * @type {number}
   * @memberof StepRequest
   */
  order: number
  /**
   *
   * @type {StepType}
   * @memberof StepRequest
   */
  type: StepType
  /**
   * Optional sub-scenario for this step
   * @type {string}
   * @memberof StepRequest
   */
  subScenario?: string
  /**
   * List of actions associated with this step
   * @type {Array<StepRequestActionsInner>}
   * @memberof StepRequest
   */
  actions: Array<StepRequestActionsInner>
  /**
   * Asset referenced by this step
   * @type {string}
   * @memberof StepRequest
   */
  asset?: string
}
/**
 * Check if a given object implements the StepRequest interface.
 */
export declare function instanceOfStepRequest(value: object): value is StepRequest
export declare function StepRequestFromJSON(json: any): StepRequest
export declare function StepRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): StepRequest
export declare function StepRequestToJSON(json: any): StepRequest
export declare function StepRequestToJSONTyped(value?: StepRequest | null, ignoreDiscriminator?: boolean): any
//# sourceMappingURL=StepRequest.d.ts.map
