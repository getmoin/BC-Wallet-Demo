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
exports.instanceOfGetIssuanceScenario404Response = instanceOfGetIssuanceScenario404Response;
exports.GetIssuanceScenario404ResponseFromJSON = GetIssuanceScenario404ResponseFromJSON;
exports.GetIssuanceScenario404ResponseFromJSONTyped = GetIssuanceScenario404ResponseFromJSONTyped;
exports.GetIssuanceScenario404ResponseToJSON = GetIssuanceScenario404ResponseToJSON;
exports.GetIssuanceScenario404ResponseToJSONTyped = GetIssuanceScenario404ResponseToJSONTyped;
/**
 * Check if a given object implements the GetIssuanceScenario404Response interface.
 */
function instanceOfGetIssuanceScenario404Response(value) {
    return true;
}
function GetIssuanceScenario404ResponseFromJSON(json) {
    return GetIssuanceScenario404ResponseFromJSONTyped(json, false);
}
function GetIssuanceScenario404ResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'message': json['message'] == null ? undefined : json['message'],
    };
}
function GetIssuanceScenario404ResponseToJSON(json) {
    return GetIssuanceScenario404ResponseToJSONTyped(json, false);
}
function GetIssuanceScenario404ResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'message': value['message'],
    };
}
//# sourceMappingURL=GetIssuanceScenario404Response.js.map