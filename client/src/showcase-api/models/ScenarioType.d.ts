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
 * Types of supported scenarios
 * @export
 */
export declare const ScenarioType: {
    readonly Issuance: "ISSUANCE";
    readonly Presentation: "PRESENTATION";
};
export type ScenarioType = typeof ScenarioType[keyof typeof ScenarioType];
export declare function instanceOfScenarioType(value: any): boolean;
export declare function ScenarioTypeFromJSON(json: any): ScenarioType;
export declare function ScenarioTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScenarioType;
export declare function ScenarioTypeToJSON(value?: ScenarioType | null): any;
export declare function ScenarioTypeToJSONTyped(value: any, ignoreDiscriminator: boolean): ScenarioType;
//# sourceMappingURL=ScenarioType.d.ts.map