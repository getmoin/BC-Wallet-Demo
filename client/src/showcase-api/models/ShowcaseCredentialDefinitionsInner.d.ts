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
import type { CredentialDefinition } from './CredentialDefinition'
import type { Id } from './Id'

/**
 * @type ShowcaseCredentialDefinitionsInner
 *
 * @export
 */
export type ShowcaseCredentialDefinitionsInner = CredentialDefinition | Id
export declare function ShowcaseCredentialDefinitionsInnerFromJSON(json: any): ShowcaseCredentialDefinitionsInner
export declare function ShowcaseCredentialDefinitionsInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ShowcaseCredentialDefinitionsInner
export declare function ShowcaseCredentialDefinitionsInnerToJSON(json: any): any
export declare function ShowcaseCredentialDefinitionsInnerToJSONTyped(
  value?: ShowcaseCredentialDefinitionsInner | null,
  ignoreDiscriminator?: boolean
): any
//# sourceMappingURL=ShowcaseCredentialDefinitionsInner.d.ts.map
