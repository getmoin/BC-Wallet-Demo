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
 * @interface WorkflowRequest
 */
export interface WorkflowRequest {
    /**
     * Name of the workflow
     * @type {string}
     * @memberof WorkflowRequest
     */
    name: string;
    /**
     * Detailed description of the workflow
     * @type {string}
     * @memberof WorkflowRequest
     */
    description: string;
    /**
     * Ordered list of steps in the workflow
     * @type {Array<StepRequest>}
     * @memberof WorkflowRequest
     */
    steps?: Array<StepRequest>;
    /**
     * References to personas used in this workflow
     * @type {Array<string>}
     * @memberof WorkflowRequest
     */
    personas?: Array<string>;
}
/**
 * Check if a given object implements the WorkflowRequest interface.
 */
export declare function instanceOfWorkflowRequest(value: object): value is WorkflowRequest;
export declare function WorkflowRequestFromJSON(json: any): WorkflowRequest;
export declare function WorkflowRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): WorkflowRequest;
export declare function WorkflowRequestToJSON(json: any): WorkflowRequest;
export declare function WorkflowRequestToJSONTyped(value?: WorkflowRequest | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=WorkflowRequest.d.ts.map