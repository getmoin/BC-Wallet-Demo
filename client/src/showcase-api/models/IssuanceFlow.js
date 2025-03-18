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
exports.IssuanceFlowTypeEnum = void 0;
exports.instanceOfIssuanceFlow = instanceOfIssuanceFlow;
exports.IssuanceFlowFromJSON = IssuanceFlowFromJSON;
exports.IssuanceFlowFromJSONTyped = IssuanceFlowFromJSONTyped;
exports.IssuanceFlowToJSON = IssuanceFlowToJSON;
exports.IssuanceFlowToJSONTyped = IssuanceFlowToJSONTyped;
const Persona_1 = require("./Persona");
const Issuer_1 = require("./Issuer");
const Step_1 = require("./Step");
/**
 * @export
 */
exports.IssuanceFlowTypeEnum = {
    Issuance: 'ISSUANCE',
    Presentation: 'PRESENTATION'
};
/**
 * Check if a given object implements the IssuanceFlow interface.
 */
function instanceOfIssuanceFlow(value) {
    if (!('name' in value) || value['name'] === undefined)
        return false;
    if (!('type' in value) || value['type'] === undefined)
        return false;
    if (!('issuer' in value) || value['issuer'] === undefined)
        return false;
    return true;
}
function IssuanceFlowFromJSON(json) {
    return IssuanceFlowFromJSONTyped(json, false);
}
function IssuanceFlowFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'id': json['id'] == null ? undefined : json['id'],
        'name': json['name'],
        'description': json['description'] == null ? undefined : json['description'],
        'type': json['type'],
        'steps': json['steps'] == null ? undefined : (json['steps'].map(Step_1.StepFromJSON)),
        'personas': json['personas'] == null ? undefined : (json['personas'].map(Persona_1.PersonaFromJSON)),
        'issuer': (0, Issuer_1.IssuerFromJSON)(json['issuer']),
    };
}
function IssuanceFlowToJSON(json) {
    return IssuanceFlowToJSONTyped(json, false);
}
function IssuanceFlowToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'id': value['id'],
        'name': value['name'],
        'description': value['description'],
        'type': value['type'],
        'steps': value['steps'] == null ? undefined : (value['steps'].map(Step_1.StepToJSON)),
        'personas': value['personas'] == null ? undefined : (value['personas'].map(Persona_1.PersonaToJSON)),
        'issuer': (0, Issuer_1.IssuerToJSON)(value['issuer']),
    };
}
//# sourceMappingURL=IssuanceFlow.js.map