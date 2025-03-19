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
exports.ShowcaseStatus = void 0;
exports.instanceOfShowcaseStatus = instanceOfShowcaseStatus;
exports.ShowcaseStatusFromJSON = ShowcaseStatusFromJSON;
exports.ShowcaseStatusFromJSONTyped = ShowcaseStatusFromJSONTyped;
exports.ShowcaseStatusToJSON = ShowcaseStatusToJSON;
exports.ShowcaseStatusToJSONTyped = ShowcaseStatusToJSONTyped;
/**
 * Types of supported credentials
 * @export
 */
exports.ShowcaseStatus = {
    Pending: 'PENDING',
    Active: 'ACTIVE',
    Archived: 'ARCHIVED'
};
function instanceOfShowcaseStatus(value) {
    for (const key in exports.ShowcaseStatus) {
        if (Object.prototype.hasOwnProperty.call(exports.ShowcaseStatus, key)) {
            if (exports.ShowcaseStatus[key] === value) {
                return true;
            }
        }
    }
    return false;
}
function ShowcaseStatusFromJSON(json) {
    return ShowcaseStatusFromJSONTyped(json, false);
}
function ShowcaseStatusFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
function ShowcaseStatusToJSON(value) {
    return value;
}
function ShowcaseStatusToJSONTyped(value, ignoreDiscriminator) {
    return value;
}
//# sourceMappingURL=ShowcaseStatus.js.map