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
exports.instanceOfStepActionRequest = instanceOfStepActionRequest;
exports.StepActionRequestFromJSON = StepActionRequestFromJSON;
exports.StepActionRequestFromJSONTyped = StepActionRequestFromJSONTyped;
exports.StepActionRequestToJSON = StepActionRequestToJSON;
exports.StepActionRequestToJSONTyped = StepActionRequestToJSONTyped;
const AriesOOBActionRequest_1 = require("./AriesOOBActionRequest");
/**
 * Check if a given object implements the StepActionRequest interface.
 */
function instanceOfStepActionRequest(value) {
    if (!('title' in value) || value['title'] === undefined)
        return false;
    if (!('text' in value) || value['text'] === undefined)
        return false;
    if (!('actionType' in value) || value['actionType'] === undefined)
        return false;
    return true;
}
function StepActionRequestFromJSON(json) {
    return StepActionRequestFromJSONTyped(json, false);
}
function StepActionRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['actionType'] === 'ARIES_OOB') {
            return (0, AriesOOBActionRequest_1.AriesOOBActionRequestFromJSONTyped)(json, ignoreDiscriminator);
        }
    }
    return {
        'title': json['title'],
        'text': json['text'],
        'actionType': json['actionType'],
    };
}
function StepActionRequestToJSON(json) {
    return StepActionRequestToJSONTyped(json, false);
}
function StepActionRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    if (!ignoreDiscriminator) {
        switch (value['actionType']) {
            case 'ARIES_OOB':
                return (0, AriesOOBActionRequest_1.AriesOOBActionRequestToJSONTyped)(value, ignoreDiscriminator);
            default:
                throw new Error(`No variant of StepActionRequest exists with 'actionType=${value['actionType']}'`);
        }
    }
    return {
        'title': value['title'],
        'text': value['text'],
        'actionType': value['actionType'],
    };
}
//# sourceMappingURL=StepActionRequest.js.map