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
exports.ShowcaseExpand = void 0;
exports.instanceOfShowcaseExpand = instanceOfShowcaseExpand;
exports.ShowcaseExpandFromJSON = ShowcaseExpandFromJSON;
exports.ShowcaseExpandFromJSONTyped = ShowcaseExpandFromJSONTyped;
exports.ShowcaseExpandToJSON = ShowcaseExpandToJSON;
exports.ShowcaseExpandToJSONTyped = ShowcaseExpandToJSONTyped;
/**
 * Which entity to expand
 * @export
 */
exports.ShowcaseExpand = {
    Scenarios: 'SCENARIOS',
    CredentialDefinitions: 'CREDENTIAL_DEFINITIONS',
    Personas: 'PERSONAS',
    AssetContent: 'ASSET_CONTENT'
};
function instanceOfShowcaseExpand(value) {
    for (const key in exports.ShowcaseExpand) {
        if (Object.prototype.hasOwnProperty.call(exports.ShowcaseExpand, key)) {
            if (exports.ShowcaseExpand[key] === value) {
                return true;
            }
        }
    }
    return false;
}
function ShowcaseExpandFromJSON(json) {
    return ShowcaseExpandFromJSONTyped(json, false);
}
function ShowcaseExpandFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
function ShowcaseExpandToJSON(value) {
    return value;
}
function ShowcaseExpandToJSONTyped(value, ignoreDiscriminator) {
    return value;
}
//# sourceMappingURL=ShowcaseExpand.js.map