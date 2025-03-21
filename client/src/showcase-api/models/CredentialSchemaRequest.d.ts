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
import type { CredentialAttributeRequest } from './CredentialAttributeRequest'
import type { IdentifierType } from './IdentifierType'
import type { Source } from './Source'

/**
 *
 * @export
 * @interface CredentialSchemaRequest
 */
export interface CredentialSchemaRequest {
  /**
   * Name of the credential schema
   * @type {string}
   * @memberof CredentialSchemaRequest
   */
  name: string
  /**
   * Version of the credential schema
   * @type {string}
   * @memberof CredentialSchemaRequest
   */
  version: string
  /**
   *
   * @type {IdentifierType}
   * @memberof CredentialSchemaRequest
   */
  identifierType?: IdentifierType
  /**
   *
   * @type {Source}
   * @memberof CredentialSchemaRequest
   */
  source?: Source
  /**
   * External identifier of this schema
   * @type {string}
   * @memberof CredentialSchemaRequest
   */
  identifier?: string
  /**
   *
   * @type {Array<CredentialAttributeRequest>}
   * @memberof CredentialSchemaRequest
   */
  attributes?: Array<CredentialAttributeRequest>
}
/**
 * Check if a given object implements the CredentialSchemaRequest interface.
 */
export declare function instanceOfCredentialSchemaRequest(value: object): value is CredentialSchemaRequest
export declare function CredentialSchemaRequestFromJSON(json: any): CredentialSchemaRequest
export declare function CredentialSchemaRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CredentialSchemaRequest
export declare function CredentialSchemaRequestToJSON(json: any): CredentialSchemaRequest
export declare function CredentialSchemaRequestToJSONTyped(
  value?: CredentialSchemaRequest | null,
  ignoreDiscriminator?: boolean
): any
//# sourceMappingURL=CredentialSchemaRequest.d.ts.map
