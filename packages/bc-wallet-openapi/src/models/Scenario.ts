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

import { mapValues } from '../runtime';
import type { Persona } from './Persona';
import {
    PersonaFromJSON,
    PersonaFromJSONTyped,
    PersonaToJSON,
    PersonaToJSONTyped,
} from './Persona';
import type { Step } from './Step';
import {
    StepFromJSON,
    StepFromJSONTyped,
    StepToJSON,
    StepToJSONTyped,
} from './Step';
import type { ScenarioType } from './ScenarioType';
import {
    ScenarioTypeFromJSON,
    ScenarioTypeFromJSONTyped,
    ScenarioTypeToJSON,
    ScenarioTypeToJSONTyped,
} from './ScenarioType';

/**
 * 
 * @export
 * @interface Scenario
 */
export interface Scenario {
    /**
     * Unique identifier for the scenario
     * @type {string}
     * @memberof Scenario
     */
    id: string;
    /**
     * Name of the scenario
     * @type {string}
     * @memberof Scenario
     */
    name: string;
    /**
     * URL-friendly identifier for the scenario
     * @type {string}
     * @memberof Scenario
     */
    slug: string;
    /**
     * Detailed description of the scenario
     * @type {string}
     * @memberof Scenario
     */
    description: string;
    /**
     * 
     * @type {ScenarioType}
     * @memberof Scenario
     */
    type: ScenarioType;
    /**
     * Ordered list of steps in the scenario
     * @type {Array<Step>}
     * @memberof Scenario
     */
    steps: Array<Step>;
    /**
     * References to personas used in this scenario
     * @type {Array<Persona>}
     * @memberof Scenario
     */
    personas: Array<Persona>;
    /**
     * Whether the workflow is hidden from the user
     * @type {boolean}
     * @memberof Scenario
     */
    hidden?: boolean;
    /**
     * Date and time the scenario was created
     * @type {Date}
     * @memberof Scenario
     */
    createdAt: Date;
    /**
     * Date and time the scenario was last updated
     * @type {Date}
     * @memberof Scenario
     */
    updatedAt: Date;
}



/**
 * Check if a given object implements the Scenario interface.
 */
export function instanceOfScenario(value: object): value is Scenario {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('slug' in value) || value['slug'] === undefined) return false;
    if (!('description' in value) || value['description'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('steps' in value) || value['steps'] === undefined) return false;
    if (!('personas' in value) || value['personas'] === undefined) return false;
    if (!('createdAt' in value) || value['createdAt'] === undefined) return false;
    if (!('updatedAt' in value) || value['updatedAt'] === undefined) return false;
    return true;
}

export function ScenarioFromJSON(json: any): Scenario {
    return ScenarioFromJSONTyped(json, false);
}

export function ScenarioFromJSONTyped(json: any, ignoreDiscriminator: boolean): Scenario {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'slug': json['slug'],
        'description': json['description'],
        'type': ScenarioTypeFromJSON(json['type']),
        'steps': ((json['steps'] as Array<any>).map(StepFromJSON)),
        'personas': ((json['personas'] as Array<any>).map(PersonaFromJSON)),
        'hidden': json['hidden'] == null ? undefined : json['hidden'],
        'createdAt': (new Date(json['createdAt'])),
        'updatedAt': (new Date(json['updatedAt'])),
    };
}

export function ScenarioToJSON(json: any): Scenario {
    return ScenarioToJSONTyped(json, false);
}

export function ScenarioToJSONTyped(value?: Scenario | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'name': value['name'],
        'slug': value['slug'],
        'description': value['description'],
        'type': ScenarioTypeToJSON(value['type']),
        'steps': ((value['steps'] as Array<any>).map(StepToJSON)),
        'personas': ((value['personas'] as Array<any>).map(PersonaToJSON)),
        'hidden': value['hidden'],
        'createdAt': ((value['createdAt']).toISOString()),
        'updatedAt': ((value['updatedAt']).toISOString()),
    };
}

