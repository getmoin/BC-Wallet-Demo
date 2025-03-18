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
exports.instanceOfScenarioRequest = instanceOfScenarioRequest;
exports.ScenarioRequestFromJSON = ScenarioRequestFromJSON;
exports.ScenarioRequestFromJSONTyped = ScenarioRequestFromJSONTyped;
exports.ScenarioRequestToJSON = ScenarioRequestToJSON;
exports.ScenarioRequestToJSONTyped = ScenarioRequestToJSONTyped;
const StepRequest_1 = require("./StepRequest");
/**
 * Check if a given object implements the ScenarioRequest interface.
 */
function instanceOfScenarioRequest(value) {
    if (!('name' in value) || value['name'] === undefined)
        return false;
    if (!('description' in value) || value['description'] === undefined)
        return false;
    if (!('steps' in value) || value['steps'] === undefined)
        return false;
    if (!('personas' in value) || value['personas'] === undefined)
        return false;
    return true;
}
function ScenarioRequestFromJSON(json) {
    return ScenarioRequestFromJSONTyped(json, false);
}
function ScenarioRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'name': json['name'],
        'description': json['description'],
        'steps': (json['steps'].map(StepRequest_1.StepRequestFromJSON)),
        'personas': json['personas'],
        'hidden': json['hidden'] == null ? undefined : json['hidden'],
    };
}
function ScenarioRequestToJSON(json) {
    return ScenarioRequestToJSONTyped(json, false);
}
function ScenarioRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'name': value['name'],
        'description': value['description'],
        'steps': (value['steps'].map(StepRequest_1.StepRequestToJSON)),
        'personas': value['personas'],
        'hidden': value['hidden'],
    };
}
//# sourceMappingURL=ScenarioRequest.js.map