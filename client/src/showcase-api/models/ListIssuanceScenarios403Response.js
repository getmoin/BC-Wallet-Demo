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
exports.instanceOfListIssuanceScenarios403Response = instanceOfListIssuanceScenarios403Response;
exports.ListIssuanceScenarios403ResponseFromJSON = ListIssuanceScenarios403ResponseFromJSON;
exports.ListIssuanceScenarios403ResponseFromJSONTyped = ListIssuanceScenarios403ResponseFromJSONTyped;
exports.ListIssuanceScenarios403ResponseToJSON = ListIssuanceScenarios403ResponseToJSON;
exports.ListIssuanceScenarios403ResponseToJSONTyped = ListIssuanceScenarios403ResponseToJSONTyped;
/**
 * Check if a given object implements the ListIssuanceScenarios403Response interface.
 */
function instanceOfListIssuanceScenarios403Response(value) {
    return true;
}
function ListIssuanceScenarios403ResponseFromJSON(json) {
    return ListIssuanceScenarios403ResponseFromJSONTyped(json, false);
}
function ListIssuanceScenarios403ResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'message': json['message'] == null ? undefined : json['message'],
    };
}
function ListIssuanceScenarios403ResponseToJSON(json) {
    return ListIssuanceScenarios403ResponseToJSONTyped(json, false);
}
function ListIssuanceScenarios403ResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'message': value['message'],
    };
}
//# sourceMappingURL=ListIssuanceScenarios403Response.js.map