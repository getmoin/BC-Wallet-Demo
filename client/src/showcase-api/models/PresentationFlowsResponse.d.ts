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
import type { PresentationFlow } from './PresentationFlow'

/**
 *
 * @export
 * @interface PresentationFlowsResponse
 */
export interface PresentationFlowsResponse {
  /**
   *
   * @type {Array<PresentationFlow>}
   * @memberof PresentationFlowsResponse
   */
  presentationFlows?: Array<PresentationFlow>
}
/**
 * Check if a given object implements the PresentationFlowsResponse interface.
 */
export declare function instanceOfPresentationFlowsResponse(value: object): value is PresentationFlowsResponse
export declare function PresentationFlowsResponseFromJSON(json: any): PresentationFlowsResponse
export declare function PresentationFlowsResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): PresentationFlowsResponse
export declare function PresentationFlowsResponseToJSON(json: any): PresentationFlowsResponse
export declare function PresentationFlowsResponseToJSONTyped(
  value?: PresentationFlowsResponse | null,
  ignoreDiscriminator?: boolean
): any
//# sourceMappingURL=PresentationFlowsResponse.d.ts.map
