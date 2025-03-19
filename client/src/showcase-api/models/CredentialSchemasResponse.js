'use strict'
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.instanceOfCredentialSchemasResponse = instanceOfCredentialSchemasResponse;
exports.CredentialSchemasResponseFromJSON = CredentialSchemasResponseFromJSON;
exports.CredentialSchemasResponseFromJSONTyped = CredentialSchemasResponseFromJSONTyped;
exports.CredentialSchemasResponseToJSON = CredentialSchemasResponseToJSON;
exports.CredentialSchemasResponseToJSONTyped = CredentialSchemasResponseToJSONTyped;
const CredentialSchema_1 = require("./CredentialSchema");
/**
 * Check if a given object implements the CredentialSchemasResponse interface.
 */
function instanceOfCredentialSchemasResponse(value) {
    return true;
}
function CredentialSchemasResponseFromJSON(json) {
    return CredentialSchemasResponseFromJSONTyped(json, false);
}
function CredentialSchemasResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'credentialSchemas': json['credentialSchemas'] == null ? undefined : (json['credentialSchemas'].map(CredentialSchema_1.CredentialSchemaFromJSON)),
    };
}
function CredentialSchemasResponseToJSON(json) {
    return CredentialSchemasResponseToJSONTyped(json, false);
}
function CredentialSchemasResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'credentialSchemas': value['credentialSchemas'] == null ? undefined : (value['credentialSchemas'].map(CredentialSchema_1.CredentialSchemaToJSON)),
    };
}
//# sourceMappingURL=CredentialSchemasResponse.js.map