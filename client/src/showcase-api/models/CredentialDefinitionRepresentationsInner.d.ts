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
import type { CredentialRepresentation } from './CredentialRepresentation'
import type { OCARepresentation } from './OCARepresentation'
/**
 * @type CredentialDefinitionRepresentationsInner
 *
 * @export
 */
export type CredentialDefinitionRepresentationsInner = CredentialRepresentation | OCARepresentation
export declare function CredentialDefinitionRepresentationsInnerFromJSON(
  json: any
): CredentialDefinitionRepresentationsInner
export declare function CredentialDefinitionRepresentationsInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CredentialDefinitionRepresentationsInner
export declare function CredentialDefinitionRepresentationsInnerToJSON(json: any): any
export declare function CredentialDefinitionRepresentationsInnerToJSONTyped(
  value?: CredentialDefinitionRepresentationsInner | null,
  ignoreDiscriminator?: boolean
): any
//# sourceMappingURL=CredentialDefinitionRepresentationsInner.d.ts.map
