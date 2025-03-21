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
import type { Step } from './Step'

/**
 *
 * @export
 * @interface StepResponse
 */
export interface StepResponse {
  /**
   *
   * @type {Step}
   * @memberof StepResponse
   */
  step?: Step
}
/**
 * Check if a given object implements the StepResponse interface.
 */
export declare function instanceOfStepResponse(value: object): value is StepResponse
export declare function StepResponseFromJSON(json: any): StepResponse
export declare function StepResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): StepResponse
export declare function StepResponseToJSON(json: any): StepResponse
export declare function StepResponseToJSONTyped(value?: StepResponse | null, ignoreDiscriminator?: boolean): any
//# sourceMappingURL=StepResponse.d.ts.map
