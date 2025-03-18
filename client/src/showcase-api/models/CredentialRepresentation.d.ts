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
 *
 * @export
 * @interface CredentialRepresentation
 */
export interface CredentialRepresentation {
    /**
     * Unique identifier for the credential representation
     * @type {string}
     * @memberof CredentialRepresentation
     */
    id: string;
    /**
     * Date and time the credential representation was created
     * @type {Date}
     * @memberof CredentialRepresentation
     */
    createdAt: Date;
    /**
     * Date and time the credential representation was last updated
     * @type {Date}
     * @memberof CredentialRepresentation
     */
    updatedAt: Date;
}
/**
 * Check if a given object implements the CredentialRepresentation interface.
 */
export declare function instanceOfCredentialRepresentation(value: object): value is CredentialRepresentation;
export declare function CredentialRepresentationFromJSON(json: any): CredentialRepresentation;
export declare function CredentialRepresentationFromJSONTyped(json: any, ignoreDiscriminator: boolean): CredentialRepresentation;
export declare function CredentialRepresentationToJSON(json: any): CredentialRepresentation;
export declare function CredentialRepresentationToJSONTyped(value?: CredentialRepresentation | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=CredentialRepresentation.d.ts.map