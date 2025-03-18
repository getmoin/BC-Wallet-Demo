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
exports.instanceOfIssuerRequest = instanceOfIssuerRequest;
exports.IssuerRequestFromJSON = IssuerRequestFromJSON;
exports.IssuerRequestFromJSONTyped = IssuerRequestFromJSONTyped;
exports.IssuerRequestToJSON = IssuerRequestToJSON;
exports.IssuerRequestToJSONTyped = IssuerRequestToJSONTyped;
const IssuerType_1 = require("./IssuerType");
const IdentifierType_1 = require("./IdentifierType");
/**
 * Check if a given object implements the IssuerRequest interface.
 */
function instanceOfIssuerRequest(value) {
    if (!('name' in value) || value['name'] === undefined)
        return false;
    if (!('description' in value) || value['description'] === undefined)
        return false;
    if (!('type' in value) || value['type'] === undefined)
        return false;
    if (!('credentialDefinitions' in value) || value['credentialDefinitions'] === undefined)
        return false;
    if (!('credentialSchemas' in value) || value['credentialSchemas'] === undefined)
        return false;
    return true;
}
function IssuerRequestFromJSON(json) {
    return IssuerRequestFromJSONTyped(json, false);
}
function IssuerRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'name': json['name'],
        'description': json['description'],
        'type': (0, IssuerType_1.IssuerTypeFromJSON)(json['type']),
        'identifierType': json['identifierType'] == null ? undefined : (0, IdentifierType_1.IdentifierTypeFromJSON)(json['identifierType']),
        'identifier': json['identifier'] == null ? undefined : json['identifier'],
        'organization': json['organization'] == null ? undefined : json['organization'],
        'logo': json['logo'] == null ? undefined : json['logo'],
        'credentialDefinitions': json['credentialDefinitions'],
        'credentialSchemas': json['credentialSchemas'],
    };
}
function IssuerRequestToJSON(json) {
    return IssuerRequestToJSONTyped(json, false);
}
function IssuerRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'name': value['name'],
        'description': value['description'],
        'type': (0, IssuerType_1.IssuerTypeToJSON)(value['type']),
        'identifierType': (0, IdentifierType_1.IdentifierTypeToJSON)(value['identifierType']),
        'identifier': value['identifier'],
        'organization': value['organization'],
        'logo': value['logo'],
        'credentialDefinitions': value['credentialDefinitions'],
        'credentialSchemas': value['credentialSchemas'],
    };
}
//# sourceMappingURL=IssuerRequest.js.map