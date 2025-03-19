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
exports.instanceOfStepActionsResponse = instanceOfStepActionsResponse;
exports.StepActionsResponseFromJSON = StepActionsResponseFromJSON;
exports.StepActionsResponseFromJSONTyped = StepActionsResponseFromJSONTyped;
exports.StepActionsResponseToJSON = StepActionsResponseToJSON;
exports.StepActionsResponseToJSONTyped = StepActionsResponseToJSONTyped;
const StepAction_1 = require("./StepAction");
/**
 * Check if a given object implements the StepActionsResponse interface.
 */
function instanceOfStepActionsResponse(value) {
    return true;
}
function StepActionsResponseFromJSON(json) {
    return StepActionsResponseFromJSONTyped(json, false);
}
function StepActionsResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'actions': json['actions'] == null ? undefined : (json['actions'].map(StepAction_1.StepActionFromJSON)),
    };
}
function StepActionsResponseToJSON(json) {
    return StepActionsResponseToJSONTyped(json, false);
}
function StepActionsResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'actions': value['actions'] == null ? undefined : (value['actions'].map(StepAction_1.StepActionToJSON)),
    };
}
//# sourceMappingURL=StepActionsResponse.js.map