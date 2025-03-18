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
exports.instanceOfIssuanceScenariosResponse = instanceOfIssuanceScenariosResponse;
exports.IssuanceScenariosResponseFromJSON = IssuanceScenariosResponseFromJSON;
exports.IssuanceScenariosResponseFromJSONTyped = IssuanceScenariosResponseFromJSONTyped;
exports.IssuanceScenariosResponseToJSON = IssuanceScenariosResponseToJSON;
exports.IssuanceScenariosResponseToJSONTyped = IssuanceScenariosResponseToJSONTyped;
const IssuanceScenario_1 = require("./IssuanceScenario");
/**
 * Check if a given object implements the IssuanceScenariosResponse interface.
 */
function instanceOfIssuanceScenariosResponse(value) {
    return true;
}
function IssuanceScenariosResponseFromJSON(json) {
    return IssuanceScenariosResponseFromJSONTyped(json, false);
}
function IssuanceScenariosResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'issuanceScenarios': json['issuanceScenarios'] == null ? undefined : (json['issuanceScenarios'].map(IssuanceScenario_1.IssuanceScenarioFromJSON)),
    };
}
function IssuanceScenariosResponseToJSON(json) {
    return IssuanceScenariosResponseToJSONTyped(json, false);
}
function IssuanceScenariosResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'issuanceScenarios': value['issuanceScenarios'] == null ? undefined : (value['issuanceScenarios'].map(IssuanceScenario_1.IssuanceScenarioToJSON)),
    };
}
//# sourceMappingURL=IssuanceScenariosResponse.js.map