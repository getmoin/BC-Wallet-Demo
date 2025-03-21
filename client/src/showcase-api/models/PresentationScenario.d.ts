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
import type { Asset } from './Asset'
import type { Persona } from './Persona'
import type { RelyingParty } from './RelyingParty'
import type { ScenarioType } from './ScenarioType'
import type { Step } from './Step'

/**
 * Scenario specialization for credential presentation
 * @export
 * @interface PresentationScenario
 */
export interface PresentationScenario {
  /**
   * Unique identifier for the scenario
   * @type {string}
   * @memberof PresentationScenario
   */
  id: string
  /**
   * Name of the scenario
   * @type {string}
   * @memberof PresentationScenario
   */
  name?: string
  /**
   * URL-friendly identifier for the scenario
   * @type {string}
   * @memberof PresentationScenario
   */
  slug?: string
  /**
   * Detailed description of the scenario
   * @type {string}
   * @memberof PresentationScenario
   */
  description?: string
  /**
   *
   * @type {ScenarioType}
   * @memberof PresentationScenario
   */
  type?: ScenarioType
  /**
   * Ordered list of steps in the scenario
   * @type {Array<Step>}
   * @memberof PresentationScenario
   */
  steps?: Array<Step>
  /**
   * References to personas used in this scenario
   * @type {Array<Persona>}
   * @memberof PresentationScenario
   */
  personas?: Array<Persona>
  /**
   * Whether the workflow is hidden from the user
   * @type {boolean}
   * @memberof PresentationScenario
   */
  hidden?: boolean
  /**
   * Date and time the scenario was created
   * @type {Date}
   * @memberof PresentationScenario
   */
  createdAt?: Date
  /**
   * Date and time the scenario was last updated
   * @type {Date}
   * @memberof PresentationScenario
   */
  updatedAt?: Date
  /**
   *
   * @type {Asset}
   * @memberof PresentationScenario
   */
  bannerImage?: Asset
  /**
   *
   * @type {RelyingParty}
   * @memberof PresentationScenario
   */
  relyingParty: RelyingParty
}
/**
 * Check if a given object implements the PresentationScenario interface.
 */
export declare function instanceOfPresentationScenario(value: object): value is PresentationScenario
export declare function PresentationScenarioFromJSON(json: any): PresentationScenario
export declare function PresentationScenarioFromJSONTyped(json: any, ignoreDiscriminator: boolean): PresentationScenario
export declare function PresentationScenarioToJSON(json: any): PresentationScenario
export declare function PresentationScenarioToJSONTyped(
  value?: PresentationScenario | null,
  ignoreDiscriminator?: boolean
): any
//# sourceMappingURL=PresentationScenario.d.ts.map
