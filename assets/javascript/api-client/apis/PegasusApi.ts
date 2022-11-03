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


import * as runtime from '../runtime';
import type {
  AggregateEmployeeData,
  Employee,
  PaginatedEmployeeList,
  PatchedEmployee,
} from '../models';
import {
    AggregateEmployeeDataFromJSON,
    AggregateEmployeeDataToJSON,
    EmployeeFromJSON,
    EmployeeToJSON,
    PaginatedEmployeeListFromJSON,
    PaginatedEmployeeListToJSON,
    PatchedEmployeeFromJSON,
    PatchedEmployeeToJSON,
} from '../models';

export interface EmployeesCreateRequest {
    employee: Employee;
}

export interface EmployeesDestroyRequest {
    id: number;
}

export interface EmployeesListRequest {
    page?: number;
}

export interface EmployeesPartialUpdateRequest {
    id: number;
    patchedEmployee?: PatchedEmployee;
}

export interface EmployeesRetrieveRequest {
    id: number;
}

export interface EmployeesUpdateRequest {
    id: number;
    employee: Employee;
}

/**
 * 
 */
export class PegasusApi extends runtime.BaseAPI {

    /**
     */
    async employeesAggregateDataRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AggregateEmployeeData>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/pegasus/employees/api/employee-data/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AggregateEmployeeDataFromJSON(jsonValue));
    }

    /**
     */
    async employeesAggregateData(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AggregateEmployeeData> {
        const response = await this.employeesAggregateDataRaw(initOverrides);
        return await response.value();
    }

    /**
     */
    async employeesCreateRaw(requestParameters: EmployeesCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Employee>> {
        if (requestParameters.employee === null || requestParameters.employee === undefined) {
            throw new runtime.RequiredError('employee','Required parameter requestParameters.employee was null or undefined when calling employeesCreate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/pegasus/employees/api/employees/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: EmployeeToJSON(requestParameters.employee),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EmployeeFromJSON(jsonValue));
    }

    /**
     */
    async employeesCreate(requestParameters: EmployeesCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Employee> {
        const response = await this.employeesCreateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async employeesDestroyRaw(requestParameters: EmployeesDestroyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling employeesDestroy.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/pegasus/employees/api/employees/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async employeesDestroy(requestParameters: EmployeesDestroyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.employeesDestroyRaw(requestParameters, initOverrides);
    }

    /**
     */
    async employeesListRaw(requestParameters: EmployeesListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaginatedEmployeeList>> {
        const queryParameters: any = {};

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/pegasus/employees/api/employees/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaginatedEmployeeListFromJSON(jsonValue));
    }

    /**
     */
    async employeesList(requestParameters: EmployeesListRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaginatedEmployeeList> {
        const response = await this.employeesListRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async employeesPartialUpdateRaw(requestParameters: EmployeesPartialUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Employee>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling employeesPartialUpdate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/pegasus/employees/api/employees/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: PatchedEmployeeToJSON(requestParameters.patchedEmployee),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EmployeeFromJSON(jsonValue));
    }

    /**
     */
    async employeesPartialUpdate(requestParameters: EmployeesPartialUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Employee> {
        const response = await this.employeesPartialUpdateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async employeesRetrieveRaw(requestParameters: EmployeesRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Employee>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling employeesRetrieve.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/pegasus/employees/api/employees/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EmployeeFromJSON(jsonValue));
    }

    /**
     */
    async employeesRetrieve(requestParameters: EmployeesRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Employee> {
        const response = await this.employeesRetrieveRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async employeesUpdateRaw(requestParameters: EmployeesUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Employee>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling employeesUpdate.');
        }

        if (requestParameters.employee === null || requestParameters.employee === undefined) {
            throw new runtime.RequiredError('employee','Required parameter requestParameters.employee was null or undefined when calling employeesUpdate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKeyAuth authentication
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/pegasus/employees/api/employees/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: EmployeeToJSON(requestParameters.employee),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EmployeeFromJSON(jsonValue));
    }

    /**
     */
    async employeesUpdate(requestParameters: EmployeesUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Employee> {
        const response = await this.employeesUpdateRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
