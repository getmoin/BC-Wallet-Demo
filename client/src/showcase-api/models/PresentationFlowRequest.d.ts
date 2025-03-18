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
import type { StepRequest } from './StepRequest';
/**
 *
 * @export
 * @interface PresentationFlowRequest
 */
export interface PresentationFlowRequest {
    /**
     * Name of the workflow
     * @type {string}
     * @memberof PresentationFlowRequest
     */
    name: string;
    /**
     * Detailed description of the workflow
     * @type {string}
     * @memberof PresentationFlowRequest
     */
    description: string;
    /**
     * Ordered list of steps in the workflow
     * @type {Array<StepRequest>}
     * @memberof PresentationFlowRequest
     */
    steps?: Array<StepRequest>;
    /**
     * References to personas used in this workflow
     * @type {Array<string>}
     * @memberof PresentationFlowRequest
     */
    personas?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof PresentationFlowRequest
     */
    relyingParty: string;
}
/**
 * Check if a given object implements the PresentationFlowRequest interface.
 */
export declare function instanceOfPresentationFlowRequest(value: object): value is PresentationFlowRequest;
export declare function PresentationFlowRequestFromJSON(json: any): PresentationFlowRequest;
export declare function PresentationFlowRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PresentationFlowRequest;
export declare function PresentationFlowRequestToJSON(json: any): PresentationFlowRequest;
export declare function PresentationFlowRequestToJSONTyped(value?: PresentationFlowRequest | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=PresentationFlowRequest.d.ts.map