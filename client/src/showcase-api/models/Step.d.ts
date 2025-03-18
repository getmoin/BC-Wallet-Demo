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
import type { StepAction } from './StepAction';
import type { StepType } from './StepType';
import type { Asset } from './Asset';
/**
 *
 * @export
 * @interface Step
 */
export interface Step {
    /**
     * Unique identifier for the step
     * @type {string}
     * @memberof Step
     */
    id: string;
    /**
     * Title of the step
     * @type {string}
     * @memberof Step
     */
    title: string;
    /**
     * Detailed description of the step
     * @type {string}
     * @memberof Step
     */
    description: string;
    /**
     * Order of the step in the scenario
     * @type {number}
     * @memberof Step
     */
    order: number;
    /**
     *
     * @type {StepType}
     * @memberof Step
     */
    type: StepType;
    /**
     * Optional sub-scenario for this step
     * @type {string}
     * @memberof Step
     */
    subScenario?: string;
    /**
     *
     * @type {Array<StepAction>}
     * @memberof Step
     */
    actions: Array<StepAction>;
    /**
     * The asset id
     * @type {string}
     * @memberof Step
     */
    assetId?: string;
    /**
     *
     * @type {Asset}
     * @memberof Step
     */
    asset?: Asset;
    /**
     * Date and time the step was created
     * @type {Date}
     * @memberof Step
     */
    createdAt: Date;
    /**
     * Date and time the step was last updated
     * @type {Date}
     * @memberof Step
     */
    updatedAt: Date;
}
/**
 * Check if a given object implements the Step interface.
 */
export declare function instanceOfStep(value: object): value is Step;
export declare function StepFromJSON(json: any): Step;
export declare function StepFromJSONTyped(json: any, ignoreDiscriminator: boolean): Step;
export declare function StepToJSON(json: any): Step;
export declare function StepToJSONTyped(value?: Step | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=Step.d.ts.map