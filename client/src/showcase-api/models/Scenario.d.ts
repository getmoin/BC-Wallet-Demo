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
import type { Persona } from './Persona';
import type { Asset } from './Asset';
import type { Step } from './Step';
import type { ScenarioType } from './ScenarioType';
/**
 *
 * @export
 * @interface Scenario
 */
export interface Scenario {
    /**
     * Unique identifier for the scenario
     * @type {string}
     * @memberof Scenario
     */
    id: string;
    /**
     * Name of the scenario
     * @type {string}
     * @memberof Scenario
     */
    name?: string;
    /**
     * URL-friendly identifier for the scenario
     * @type {string}
     * @memberof Scenario
     */
    slug?: string;
    /**
     * Detailed description of the scenario
     * @type {string}
     * @memberof Scenario
     */
    description?: string;
    /**
     *
     * @type {ScenarioType}
     * @memberof Scenario
     */
    type?: ScenarioType;
    /**
     * Ordered list of steps in the scenario
     * @type {Array<Step>}
     * @memberof Scenario
     */
    steps?: Array<Step>;
    /**
     * References to personas used in this scenario
     * @type {Array<Persona>}
     * @memberof Scenario
     */
    personas?: Array<Persona>;
    /**
     * Whether the workflow is hidden from the user
     * @type {boolean}
     * @memberof Scenario
     */
    hidden?: boolean;
    /**
     * Date and time the scenario was created
     * @type {Date}
     * @memberof Scenario
     */
    createdAt?: Date;
    /**
     * Date and time the scenario was last updated
     * @type {Date}
     * @memberof Scenario
     */
    updatedAt?: Date;
    /**
     *
     * @type {Asset}
     * @memberof Scenario
     */
    bannerImage?: Asset;
}
/**
 * Check if a given object implements the Scenario interface.
 */
export declare function instanceOfScenario(value: object): value is Scenario;
export declare function ScenarioFromJSON(json: any): Scenario;
export declare function ScenarioFromJSONTyped(json: any, ignoreDiscriminator: boolean): Scenario;
export declare function ScenarioToJSON(json: any): Scenario;
export declare function ScenarioToJSONTyped(value?: Scenario | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=Scenario.d.ts.map