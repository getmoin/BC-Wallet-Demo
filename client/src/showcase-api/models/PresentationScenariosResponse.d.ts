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
import type { PresentationScenario } from './PresentationScenario';
/**
 *
 * @export
 * @interface PresentationScenariosResponse
 */
export interface PresentationScenariosResponse {
    /**
     *
     * @type {Array<PresentationScenario>}
     * @memberof PresentationScenariosResponse
     */
    presentationScenarios?: Array<PresentationScenario>;
}
/**
 * Check if a given object implements the PresentationScenariosResponse interface.
 */
export declare function instanceOfPresentationScenariosResponse(value: object): value is PresentationScenariosResponse;
export declare function PresentationScenariosResponseFromJSON(json: any): PresentationScenariosResponse;
export declare function PresentationScenariosResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PresentationScenariosResponse;
export declare function PresentationScenariosResponseToJSON(json: any): PresentationScenariosResponse;
export declare function PresentationScenariosResponseToJSONTyped(value?: PresentationScenariosResponse | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=PresentationScenariosResponse.d.ts.map