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
import type { Asset } from './Asset';
import {
    AssetFromJSON,
    AssetFromJSONTyped,
    AssetToJSON,
    AssetToJSONTyped,
} from './Asset';

/**
 * 
 * @export
 * @interface Persona
 */
export interface Persona {
    /**
     * Unique identifier for the persona
     * @type {string}
     * @memberof Persona
     */
    id: string;
    /**
     * Name of the persona
     * @type {string}
     * @memberof Persona
     */
    name: string;
    /**
     * URL-friendly identifier for the persona
     * @type {string}
     * @memberof Persona
     */
    slug: string;
    /**
     * Role of the persona in the system
     * @type {string}
     * @memberof Persona
     */
    role: string;
    /**
     * Detailed description of the persona
     * @type {string}
     * @memberof Persona
     */
    description: string;
    /**
     * 
     * @type {Asset}
     * @memberof Persona
     */
    headshotImage?: Asset;
    /**
     * 
     * @type {Asset}
     * @memberof Persona
     */
    bodyImage?: Asset;
    /**
     * Whether the persona is hidden from the user
     * @type {boolean}
     * @memberof Persona
     */
    hidden?: boolean;
    /**
     * Date and time the persona was created
     * @type {Date}
     * @memberof Persona
     */
    createdAt: Date;
    /**
     * Date and time the persona was last updated
     * @type {Date}
     * @memberof Persona
     */
    updatedAt: Date;
}

/**
 * Check if a given object implements the Persona interface.
 */
export function instanceOfPersona(value: object): value is Persona {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('slug' in value) || value['slug'] === undefined) return false;
    if (!('role' in value) || value['role'] === undefined) return false;
    if (!('description' in value) || value['description'] === undefined) return false;
    if (!('createdAt' in value) || value['createdAt'] === undefined) return false;
    if (!('updatedAt' in value) || value['updatedAt'] === undefined) return false;
    return true;
}

export function PersonaFromJSON(json: any): Persona {
    return PersonaFromJSONTyped(json, false);
}

export function PersonaFromJSONTyped(json: any, ignoreDiscriminator: boolean): Persona {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'slug': json['slug'],
        'role': json['role'],
        'description': json['description'],
        'headshotImage': json['headshotImage'] == null ? undefined : AssetFromJSON(json['headshotImage']),
        'bodyImage': json['bodyImage'] == null ? undefined : AssetFromJSON(json['bodyImage']),
        'hidden': json['hidden'] == null ? undefined : json['hidden'],
        'createdAt': (new Date(json['createdAt'])),
        'updatedAt': (new Date(json['updatedAt'])),
    };
}

export function PersonaToJSON(json: any): Persona {
    return PersonaToJSONTyped(json, false);
}

export function PersonaToJSONTyped(value?: Persona | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'name': value['name'],
        'slug': value['slug'],
        'role': value['role'],
        'description': value['description'],
        'headshotImage': AssetToJSON(value['headshotImage']),
        'bodyImage': AssetToJSON(value['bodyImage']),
        'hidden': value['hidden'],
        'createdAt': ((value['createdAt']).toISOString()),
        'updatedAt': ((value['updatedAt']).toISOString()),
    };
}

