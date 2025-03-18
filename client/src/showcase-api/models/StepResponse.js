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
exports.instanceOfStepResponse = instanceOfStepResponse;
exports.StepResponseFromJSON = StepResponseFromJSON;
exports.StepResponseFromJSONTyped = StepResponseFromJSONTyped;
exports.StepResponseToJSON = StepResponseToJSON;
exports.StepResponseToJSONTyped = StepResponseToJSONTyped;
const Step_1 = require("./Step");
/**
 * Check if a given object implements the StepResponse interface.
 */
function instanceOfStepResponse(value) {
    return true;
}
function StepResponseFromJSON(json) {
    return StepResponseFromJSONTyped(json, false);
}
function StepResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'step': json['step'] == null ? undefined : (0, Step_1.StepFromJSON)(json['step']),
    };
}
function StepResponseToJSON(json) {
    return StepResponseToJSONTyped(json, false);
}
function StepResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'step': (0, Step_1.StepToJSON)(value['step']),
    };
}
//# sourceMappingURL=StepResponse.js.map