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
 * Types of supported credentials
 * @export
 */
export declare const CredentialType: {
  readonly Anoncred: 'ANONCRED'
}
export type CredentialType = (typeof CredentialType)[keyof typeof CredentialType]
export declare function instanceOfCredentialType(value: any): boolean
export declare function CredentialTypeFromJSON(json: any): CredentialType
export declare function CredentialTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CredentialType
export declare function CredentialTypeToJSON(value?: CredentialType | null): any
export declare function CredentialTypeToJSONTyped(value: any, ignoreDiscriminator: boolean): CredentialType
//# sourceMappingURL=CredentialType.d.ts.map
