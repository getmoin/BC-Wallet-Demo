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
exports.instanceOfPresentationFlowResponse = instanceOfPresentationFlowResponse;
exports.PresentationFlowResponseFromJSON = PresentationFlowResponseFromJSON;
exports.PresentationFlowResponseFromJSONTyped = PresentationFlowResponseFromJSONTyped;
exports.PresentationFlowResponseToJSON = PresentationFlowResponseToJSON;
exports.PresentationFlowResponseToJSONTyped = PresentationFlowResponseToJSONTyped;
const PresentationFlow_1 = require("./PresentationFlow");
/**
 * Check if a given object implements the PresentationFlowResponse interface.
 */
function instanceOfPresentationFlowResponse(value) {
    return true;
}
function PresentationFlowResponseFromJSON(json) {
    return PresentationFlowResponseFromJSONTyped(json, false);
}
function PresentationFlowResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'presentationFlow': json['presentationFlow'] == null ? undefined : (0, PresentationFlow_1.PresentationFlowFromJSON)(json['presentationFlow']),
    };
}
function PresentationFlowResponseToJSON(json) {
    return PresentationFlowResponseToJSONTyped(json, false);
}
function PresentationFlowResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'presentationFlow': (0, PresentationFlow_1.PresentationFlowToJSON)(value['presentationFlow']),
    };
}
//# sourceMappingURL=PresentationFlowResponse.js.map