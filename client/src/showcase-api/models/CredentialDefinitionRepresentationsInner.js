"use strict";
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
exports.CredentialDefinitionRepresentationsInnerFromJSON = CredentialDefinitionRepresentationsInnerFromJSON;
exports.CredentialDefinitionRepresentationsInnerFromJSONTyped = CredentialDefinitionRepresentationsInnerFromJSONTyped;
exports.CredentialDefinitionRepresentationsInnerToJSON = CredentialDefinitionRepresentationsInnerToJSON;
exports.CredentialDefinitionRepresentationsInnerToJSONTyped = CredentialDefinitionRepresentationsInnerToJSONTyped;
const CredentialRepresentation_1 = require("./CredentialRepresentation");
const OCARepresentation_1 = require("./OCARepresentation");
function CredentialDefinitionRepresentationsInnerFromJSON(json) {
    return CredentialDefinitionRepresentationsInnerFromJSONTyped(json, false);
}
function CredentialDefinitionRepresentationsInnerFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    if ((0, CredentialRepresentation_1.instanceOfCredentialRepresentation)(json)) {
        return (0, CredentialRepresentation_1.CredentialRepresentationFromJSONTyped)(json, true);
    }
    if ((0, OCARepresentation_1.instanceOfOCARepresentation)(json)) {
        return (0, OCARepresentation_1.OCARepresentationFromJSONTyped)(json, true);
    }
    return {};
}
function CredentialDefinitionRepresentationsInnerToJSON(json) {
    return CredentialDefinitionRepresentationsInnerToJSONTyped(json, false);
}
function CredentialDefinitionRepresentationsInnerToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    if ((0, CredentialRepresentation_1.instanceOfCredentialRepresentation)(value)) {
        return (0, CredentialRepresentation_1.CredentialRepresentationToJSON)(value);
    }
    if ((0, OCARepresentation_1.instanceOfOCARepresentation)(value)) {
        return (0, OCARepresentation_1.OCARepresentationToJSON)(value);
    }
    return {};
}
//# sourceMappingURL=CredentialDefinitionRepresentationsInner.js.map