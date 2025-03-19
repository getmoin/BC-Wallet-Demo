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
exports.instanceOfCredentialAttribute = instanceOfCredentialAttribute;
exports.CredentialAttributeFromJSON = CredentialAttributeFromJSON;
exports.CredentialAttributeFromJSONTyped = CredentialAttributeFromJSONTyped;
exports.CredentialAttributeToJSON = CredentialAttributeToJSON;
exports.CredentialAttributeToJSONTyped = CredentialAttributeToJSONTyped;
const CredentialAttributeType_1 = require("./CredentialAttributeType");
/**
 * Check if a given object implements the CredentialAttribute interface.
 */
function instanceOfCredentialAttribute(value) {
    if (!('id' in value) || value['id'] === undefined)
        return false;
    if (!('name' in value) || value['name'] === undefined)
        return false;
    if (!('type' in value) || value['type'] === undefined)
        return false;
    if (!('createdAt' in value) || value['createdAt'] === undefined)
        return false;
    if (!('updatedAt' in value) || value['updatedAt'] === undefined)
        return false;
    return true;
}
function CredentialAttributeFromJSON(json) {
    return CredentialAttributeFromJSONTyped(json, false);
}
function CredentialAttributeFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'id': json['id'],
        'name': json['name'],
        'value': json['value'] == null ? undefined : json['value'],
        'type': (0, CredentialAttributeType_1.CredentialAttributeTypeFromJSON)(json['type']),
        'createdAt': (new Date(json['createdAt'])),
        'updatedAt': (new Date(json['updatedAt'])),
    };
}
function CredentialAttributeToJSON(json) {
    return CredentialAttributeToJSONTyped(json, false);
}
function CredentialAttributeToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'id': value['id'],
        'name': value['name'],
        'value': value['value'],
        'type': (0, CredentialAttributeType_1.CredentialAttributeTypeToJSON)(value['type']),
        'createdAt': ((value['createdAt']).toISOString()),
        'updatedAt': ((value['updatedAt']).toISOString()),
    };
}
//# sourceMappingURL=CredentialAttribute.js.map