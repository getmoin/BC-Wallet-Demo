/* tslint:disable */
/* eslint-disable */
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
 * Type of step in the scenario
 * @export
 */
export const StepType = {
    HumanTask: 'HUMAN_TASK',
    Service: 'SERVICE',
    Scenario: 'SCENARIO'
} as const;
export type StepType = typeof StepType[keyof typeof StepType];


export function instanceOfStepType(value: any): boolean {
    for (const key in StepType) {
        if (Object.prototype.hasOwnProperty.call(StepType, key)) {
            if (StepType[key as keyof typeof StepType] === value) {
                return true;
            }
        }
    }
    return false;
}

export function StepTypeFromJSON(json: any): StepType {
    return StepTypeFromJSONTyped(json, false);
}

export function StepTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): StepType {
    return json as StepType;
}

export function StepTypeToJSON(value?: StepType | null): any {
    return value as any;
}

export function StepTypeToJSONTyped(value: any, ignoreDiscriminator: boolean): StepType {
    return value as StepType;
}

