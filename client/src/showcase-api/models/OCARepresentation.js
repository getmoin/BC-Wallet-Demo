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
exports.instanceOfOCARepresentation = instanceOfOCARepresentation;
exports.OCARepresentationFromJSON = OCARepresentationFromJSON;
exports.OCARepresentationFromJSONTyped = OCARepresentationFromJSONTyped;
exports.OCARepresentationToJSON = OCARepresentationToJSON;
exports.OCARepresentationToJSONTyped = OCARepresentationToJSONTyped;
/**
 * Check if a given object implements the OCARepresentation interface.
 */
function instanceOfOCARepresentation(value) {
    if (!('id' in value) || value['id'] === undefined)
        return false;
    if (!('createdAt' in value) || value['createdAt'] === undefined)
        return false;
    if (!('updatedAt' in value) || value['updatedAt'] === undefined)
        return false;
    if (!('credDefId' in value) || value['credDefId'] === undefined)
        return false;
    if (!('schemaId' in value) || value['schemaId'] === undefined)
        return false;
    return true;
}
function OCARepresentationFromJSON(json) {
    return OCARepresentationFromJSONTyped(json, false);
}
function OCARepresentationFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'id': json['id'],
        'createdAt': (new Date(json['createdAt'])),
        'updatedAt': (new Date(json['updatedAt'])),
        'credDefId': json['credDefId'],
        'schemaId': json['schemaId'],
        'ocaBundleUrl': json['ocaBundleUrl'] == null ? undefined : json['ocaBundleUrl'],
    };
}
function OCARepresentationToJSON(json) {
    return OCARepresentationToJSONTyped(json, false);
}
function OCARepresentationToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'id': value['id'],
        'createdAt': ((value['createdAt']).toISOString()),
        'updatedAt': ((value['updatedAt']).toISOString()),
        'credDefId': value['credDefId'],
        'schemaId': value['schemaId'],
        'ocaBundleUrl': value['ocaBundleUrl'],
    };
}
//# sourceMappingURL=OCARepresentation.js.map