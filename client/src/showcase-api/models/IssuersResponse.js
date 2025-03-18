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
exports.instanceOfIssuersResponse = instanceOfIssuersResponse;
exports.IssuersResponseFromJSON = IssuersResponseFromJSON;
exports.IssuersResponseFromJSONTyped = IssuersResponseFromJSONTyped;
exports.IssuersResponseToJSON = IssuersResponseToJSON;
exports.IssuersResponseToJSONTyped = IssuersResponseToJSONTyped;
const Issuer_1 = require("./Issuer");
/**
 * Check if a given object implements the IssuersResponse interface.
 */
function instanceOfIssuersResponse(value) {
    return true;
}
function IssuersResponseFromJSON(json) {
    return IssuersResponseFromJSONTyped(json, false);
}
function IssuersResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'issuers': json['issuers'] == null ? undefined : (json['issuers'].map(Issuer_1.IssuerFromJSON)),
    };
}
function IssuersResponseToJSON(json) {
    return IssuersResponseToJSONTyped(json, false);
}
function IssuersResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'issuers': value['issuers'] == null ? undefined : (value['issuers'].map(Issuer_1.IssuerToJSON)),
    };
}
//# sourceMappingURL=IssuersResponse.js.map