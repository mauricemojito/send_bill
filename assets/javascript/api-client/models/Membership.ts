/* tslint:disable */
/* eslint-disable */
/**
 * SendBill
 * The most amazing SaaS application the world has ever seen
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { RoleEnum } from './RoleEnum';
import {
    RoleEnumFromJSON,
    RoleEnumFromJSONTyped,
    RoleEnumToJSON,
} from './RoleEnum';

/**
 * 
 * @export
 * @interface Membership
 */
export interface Membership {
    /**
     * 
     * @type {number}
     * @memberof Membership
     */
    readonly id: number;
    /**
     * 
     * @type {number}
     * @memberof Membership
     */
    readonly userId: number;
    /**
     * 
     * @type {string}
     * @memberof Membership
     */
    readonly firstName: string;
    /**
     * 
     * @type {string}
     * @memberof Membership
     */
    readonly lastName: string;
    /**
     * 
     * @type {string}
     * @memberof Membership
     */
    readonly displayName: string;
    /**
     * 
     * @type {RoleEnum}
     * @memberof Membership
     */
    role: RoleEnum;
}

/**
 * Check if a given object implements the Membership interface.
 */
export function instanceOfMembership(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "userId" in value;
    isInstance = isInstance && "firstName" in value;
    isInstance = isInstance && "lastName" in value;
    isInstance = isInstance && "displayName" in value;
    isInstance = isInstance && "role" in value;

    return isInstance;
}

export function MembershipFromJSON(json: any): Membership {
    return MembershipFromJSONTyped(json, false);
}

export function MembershipFromJSONTyped(json: any, ignoreDiscriminator: boolean): Membership {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'userId': json['user_id'],
        'firstName': json['first_name'],
        'lastName': json['last_name'],
        'displayName': json['display_name'],
        'role': RoleEnumFromJSON(json['role']),
    };
}

export function MembershipToJSON(value?: Membership | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'role': RoleEnumToJSON(value.role),
    };
}

