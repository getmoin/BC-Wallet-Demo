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
 * @interface StepActionRequest
 */
export interface StepActionRequest {
  /**
   * Title of the action
   * @type {string}
   * @memberof StepActionRequest
   */
  title: string
  /**
   * Descriptive text for the action
   * @type {string}
   * @memberof StepActionRequest
   */
  text: string
  /**
   *
   * @type {string}
   * @memberof StepActionRequest
   */
  actionType: string
}
/**
 * Check if a given object implements the StepActionRequest interface.
 */
export declare function instanceOfStepActionRequest(value: object): value is StepActionRequest
export declare function StepActionRequestFromJSON(json: any): StepActionRequest
export declare function StepActionRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): StepActionRequest
export declare function StepActionRequestToJSON(json: any): StepActionRequest
export declare function StepActionRequestToJSONTyped(
  value?: StepActionRequest | null,
  ignoreDiscriminator?: boolean
): any
//# sourceMappingURL=StepActionRequest.d.ts.map
