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
exports.instanceOfScenario = instanceOfScenario;
exports.ScenarioFromJSON = ScenarioFromJSON;
exports.ScenarioFromJSONTyped = ScenarioFromJSONTyped;
exports.ScenarioToJSON = ScenarioToJSON;
exports.ScenarioToJSONTyped = ScenarioToJSONTyped;
const Persona_1 = require("./Persona");
const Asset_1 = require("./Asset");
const Step_1 = require("./Step");
const ScenarioType_1 = require("./ScenarioType");
/**
 * Check if a given object implements the Scenario interface.
 */
function instanceOfScenario(value) {
    if (!('id' in value) || value['id'] === undefined)
        return false;
    return true;
}
function ScenarioFromJSON(json) {
    return ScenarioFromJSONTyped(json, false);
}
function ScenarioFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'id': json['id'],
        'name': json['name'] == null ? undefined : json['name'],
        'slug': json['slug'] == null ? undefined : json['slug'],
        'description': json['description'] == null ? undefined : json['description'],
        'type': json['type'] == null ? undefined : (0, ScenarioType_1.ScenarioTypeFromJSON)(json['type']),
        'steps': json['steps'] == null ? undefined : (json['steps'].map(Step_1.StepFromJSON)),
        'personas': json['personas'] == null ? undefined : (json['personas'].map(Persona_1.PersonaFromJSON)),
        'hidden': json['hidden'] == null ? undefined : json['hidden'],
        'createdAt': json['createdAt'] == null ? undefined : (new Date(json['createdAt'])),
        'updatedAt': json['updatedAt'] == null ? undefined : (new Date(json['updatedAt'])),
        'bannerImage': json['bannerImage'] == null ? undefined : (0, Asset_1.AssetFromJSON)(json['bannerImage']),
    };
}
function ScenarioToJSON(json) {
    return ScenarioToJSONTyped(json, false);
}
function ScenarioToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'id': value['id'],
        'name': value['name'],
        'slug': value['slug'],
        'description': value['description'],
        'type': (0, ScenarioType_1.ScenarioTypeToJSON)(value['type']),
        'steps': value['steps'] == null ? undefined : (value['steps'].map(Step_1.StepToJSON)),
        'personas': value['personas'] == null ? undefined : (value['personas'].map(Persona_1.PersonaToJSON)),
        'hidden': value['hidden'],
        'createdAt': value['createdAt'] == null ? undefined : ((value['createdAt']).toISOString()),
        'updatedAt': value['updatedAt'] == null ? undefined : ((value['updatedAt']).toISOString()),
        'bannerImage': (0, Asset_1.AssetToJSON)(value['bannerImage']),
    };
}
//# sourceMappingURL=Scenario.js.map