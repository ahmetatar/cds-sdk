/// <reference path="./custom.d.ts" />
// tslint:disable
/**
 * Component Desing Sample - Mock API
 * Mock API project to be used for e2e tests
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This file is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the file manually.
 */

import * as url from "url";
import * as isomorphicFetch from "isomorphic-fetch";
import { Configuration } from "./configuration";

const BASE_PATH = "/".replace(/\/+$/, "");

/**
 *
 * @export
 */
export const COLLECTION_FORMATS = {
    csv: ",",
    ssv: " ",
    tsv: "\t",
    pipes: "|",
};

/**
 *
 * @export
 * @interface FetchAPI
 */
export interface FetchAPI {
    (url: string, init?: any): Promise<Response>;
}

/**
 *
 * @export
 * @interface FetchArgs
 */
export interface FetchArgs {
    url: string;
    options: any;
}

/**
 *
 * @export
 * @class BaseAPI
 */
export class BaseAPI {
    protected configuration: Configuration;

    constructor(configuration?: Configuration, protected basePath: string = BASE_PATH, protected fetch: FetchAPI = isomorphicFetch) {
        if (configuration) {
            this.configuration = configuration;
            this.basePath = configuration.basePath || this.basePath;
        }
    }
};

/**
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */
export class RequiredError extends Error {
    name: "RequiredError"
    constructor(public field: string, msg?: string) {
        super(msg);
    }
}

/**
 * 
 * @export
 * @interface Booking
 */
export interface Booking {
    /**
     * 
     * @type {string}
     * @memberof Booking
     */
    beginDate: string;
    /**
     * 
     * @type {string}
     * @memberof Booking
     */
    endDate: string;
    /**
     * 
     * @type {number}
     * @memberof Booking
     */
    profileId: number;
    /**
     * 
     * @type {number}
     * @memberof Booking
     */
    totalPrice: number;
    /**
     * 
     * @type {number}
     * @memberof Booking
     */
    currency: number;
    /**
     * 
     * @type {string}
     * @memberof Booking
     */
    notes: string;
    /**
     * 
     * @type {string}
     * @memberof Booking
     */
    status?: string;
    /**
     * 
     * @type {number}
     * @memberof Booking
     */
    tax?: number;
    /**
     * 
     * @type {string}
     * @memberof Booking
     */
    attachment?: string;
}
/**
 * 
 * @export
 * @interface Credentials
 */
export interface Credentials {
    /**
     * 
     * @type {string}
     * @memberof Credentials
     */
    userName: string;
    /**
     * 
     * @type {string}
     * @memberof Credentials
     */
    password: string;
}
/**
 * 
 * @export
 * @interface Profile
 */
export interface Profile {
    /**
     * 
     * @type {string}
     * @memberof Profile
     */
    profileImage: string;
    /**
     * 
     * @type {string}
     * @memberof Profile
     */
    fullName: string;
    /**
     * 
     * @type {string}
     * @memberof Profile
     */
    link: string;
    /**
     * 
     * @type {string}
     * @memberof Profile
     */
    userName: string;
    /**
     * 
     * @type {number}
     * @memberof Profile
     */
    basePrice: number;
    /**
     * 
     * @type {string}
     * @memberof Profile
     */
    currency: string;
    /**
     * 
     * @type {boolean}
     * @memberof Profile
     */
    isDailyPrice: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof Profile
     */
    skills: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof Profile
     */
    hourAvailability: number;
    /**
     * 
     * @type {boolean}
     * @memberof Profile
     */
    isAvailable: boolean;
    /**
     * 
     * @type {number}
     * @memberof Profile
     */
    rating?: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof Profile
     */
    socials?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof Profile
     */
    statistics?: Array<string>;
}
/**
 * 
 * @export
 * @interface TokenRequest
 */
export interface TokenRequest {
    /**
     * 
     * @type {string}
     * @memberof TokenRequest
     */
    token: string;
}
/**
 * 
 * @export
 * @interface TokenResponse
 */
export interface TokenResponse {
    /**
     * 
     * @type {string}
     * @memberof TokenResponse
     */
    accessToken: string;
    /**
     * 
     * @type {string}
     * @memberof TokenResponse
     */
    refreshToken?: string;
}
/**
 * AuthApi - fetch parameter creator
 * @export
 */
export const AuthApiFetchParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Generates token
         * @param {Credentials} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        loginPost(body: Credentials, options: any = {}): FetchArgs {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling loginPost.');
            }
            const localVarPath = `/login`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            const needsSerialization = (<any>"Credentials" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.body =  needsSerialization ? JSON.stringify(body || {}) : (body || "");

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Logouts the user
         * @param {TokenRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        logoutPost(body: TokenRequest, options: any = {}): FetchArgs {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling logoutPost.');
            }
            const localVarPath = `/logout`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            const needsSerialization = (<any>"TokenRequest" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.body =  needsSerialization ? JSON.stringify(body || {}) : (body || "");

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Generate access and refresh token
         * @param {TokenRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tokenPost(body: TokenRequest, options: any = {}): FetchArgs {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling tokenPost.');
            }
            const localVarPath = `/token`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            const needsSerialization = (<any>"TokenRequest" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.body =  needsSerialization ? JSON.stringify(body || {}) : (body || "");

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AuthApi - functional programming interface
 * @export
 */
export const AuthApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Generates token
         * @param {Credentials} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        loginPost(body: Credentials, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<TokenResponse> {
            const localVarFetchArgs = AuthApiFetchParamCreator(configuration).loginPost(body, options);
            return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
        /**
         * 
         * @summary Logouts the user
         * @param {TokenRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        logoutPost(body: TokenRequest, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Response> {
            const localVarFetchArgs = AuthApiFetchParamCreator(configuration).logoutPost(body, options);
            return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response;
                    } else {
                        throw response;
                    }
                });
            };
        },
        /**
         * 
         * @summary Generate access and refresh token
         * @param {TokenRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tokenPost(body: TokenRequest, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<TokenResponse> {
            const localVarFetchArgs = AuthApiFetchParamCreator(configuration).tokenPost(body, options);
            return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
    }
};

/**
 * AuthApi - factory interface
 * @export
 */
export const AuthApiFactory = function (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) {
    return {
        /**
         * 
         * @summary Generates token
         * @param {Credentials} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        loginPost(body: Credentials, options?: any) {
            return AuthApiFp(configuration).loginPost(body, options)(fetch, basePath);
        },
        /**
         * 
         * @summary Logouts the user
         * @param {TokenRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        logoutPost(body: TokenRequest, options?: any) {
            return AuthApiFp(configuration).logoutPost(body, options)(fetch, basePath);
        },
        /**
         * 
         * @summary Generate access and refresh token
         * @param {TokenRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tokenPost(body: TokenRequest, options?: any) {
            return AuthApiFp(configuration).tokenPost(body, options)(fetch, basePath);
        },
    };
};

/**
 * AuthApi - object-oriented interface
 * @export
 * @class AuthApi
 * @extends {BaseAPI}
 */
export class AuthApi extends BaseAPI {
    /**
     * 
     * @summary Generates token
     * @param {Credentials} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public loginPost(body: Credentials, options?: any) {
        return AuthApiFp(this.configuration).loginPost(body, options)(this.fetch, this.basePath);
    }

    /**
     * 
     * @summary Logouts the user
     * @param {TokenRequest} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public logoutPost(body: TokenRequest, options?: any) {
        return AuthApiFp(this.configuration).logoutPost(body, options)(this.fetch, this.basePath);
    }

    /**
     * 
     * @summary Generate access and refresh token
     * @param {TokenRequest} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public tokenPost(body: TokenRequest, options?: any) {
        return AuthApiFp(this.configuration).tokenPost(body, options)(this.fetch, this.basePath);
    }

}
/**
 * BookingsApi - fetch parameter creator
 * @export
 */
export const BookingsApiFetchParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get all bookings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        bookingsGet(options: any = {}): FetchArgs {
            const localVarPath = `/bookings`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get profile based on given id parameter
         * @param {number} id Booking id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        bookingsIdGet(id: number, options: any = {}): FetchArgs {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling bookingsIdGet.');
            }
            const localVarPath = `/bookings/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Create a new booking
         * @param {Booking} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        bookingsPost(body: Booking, options: any = {}): FetchArgs {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling bookingsPost.');
            }
            const localVarPath = `/bookings`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            const needsSerialization = (<any>"Booking" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.body =  needsSerialization ? JSON.stringify(body || {}) : (body || "");

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * BookingsApi - functional programming interface
 * @export
 */
export const BookingsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get all bookings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        bookingsGet(options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Array<Booking>> {
            const localVarFetchArgs = BookingsApiFetchParamCreator(configuration).bookingsGet(options);
            return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
        /**
         * 
         * @summary Get profile based on given id parameter
         * @param {number} id Booking id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        bookingsIdGet(id: number, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Booking> {
            const localVarFetchArgs = BookingsApiFetchParamCreator(configuration).bookingsIdGet(id, options);
            return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
        /**
         * 
         * @summary Create a new booking
         * @param {Booking} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        bookingsPost(body: Booking, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Response> {
            const localVarFetchArgs = BookingsApiFetchParamCreator(configuration).bookingsPost(body, options);
            return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response;
                    } else {
                        throw response;
                    }
                });
            };
        },
    }
};

/**
 * BookingsApi - factory interface
 * @export
 */
export const BookingsApiFactory = function (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) {
    return {
        /**
         * 
         * @summary Get all bookings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        bookingsGet(options?: any) {
            return BookingsApiFp(configuration).bookingsGet(options)(fetch, basePath);
        },
        /**
         * 
         * @summary Get profile based on given id parameter
         * @param {number} id Booking id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        bookingsIdGet(id: number, options?: any) {
            return BookingsApiFp(configuration).bookingsIdGet(id, options)(fetch, basePath);
        },
        /**
         * 
         * @summary Create a new booking
         * @param {Booking} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        bookingsPost(body: Booking, options?: any) {
            return BookingsApiFp(configuration).bookingsPost(body, options)(fetch, basePath);
        },
    };
};

/**
 * BookingsApi - object-oriented interface
 * @export
 * @class BookingsApi
 * @extends {BaseAPI}
 */
export class BookingsApi extends BaseAPI {
    /**
     * 
     * @summary Get all bookings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BookingsApi
     */
    public bookingsGet(options?: any) {
        return BookingsApiFp(this.configuration).bookingsGet(options)(this.fetch, this.basePath);
    }

    /**
     * 
     * @summary Get profile based on given id parameter
     * @param {number} id Booking id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BookingsApi
     */
    public bookingsIdGet(id: number, options?: any) {
        return BookingsApiFp(this.configuration).bookingsIdGet(id, options)(this.fetch, this.basePath);
    }

    /**
     * 
     * @summary Create a new booking
     * @param {Booking} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BookingsApi
     */
    public bookingsPost(body: Booking, options?: any) {
        return BookingsApiFp(this.configuration).bookingsPost(body, options)(this.fetch, this.basePath);
    }

}
/**
 * ProfilesApi - fetch parameter creator
 * @export
 */
export const ProfilesApiFetchParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get all profiles
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        profilesGet(options: any = {}): FetchArgs {
            const localVarPath = `/profiles`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get profile based on given id parameter
         * @param {number} id Profile id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        profilesIdGet(id: number, options: any = {}): FetchArgs {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling profilesIdGet.');
            }
            const localVarPath = `/profiles/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ProfilesApi - functional programming interface
 * @export
 */
export const ProfilesApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get all profiles
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        profilesGet(options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Array<Profile>> {
            const localVarFetchArgs = ProfilesApiFetchParamCreator(configuration).profilesGet(options);
            return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
        /**
         * 
         * @summary Get profile based on given id parameter
         * @param {number} id Profile id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        profilesIdGet(id: number, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Profile> {
            const localVarFetchArgs = ProfilesApiFetchParamCreator(configuration).profilesIdGet(id, options);
            return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
    }
};

/**
 * ProfilesApi - factory interface
 * @export
 */
export const ProfilesApiFactory = function (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) {
    return {
        /**
         * 
         * @summary Get all profiles
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        profilesGet(options?: any) {
            return ProfilesApiFp(configuration).profilesGet(options)(fetch, basePath);
        },
        /**
         * 
         * @summary Get profile based on given id parameter
         * @param {number} id Profile id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        profilesIdGet(id: number, options?: any) {
            return ProfilesApiFp(configuration).profilesIdGet(id, options)(fetch, basePath);
        },
    };
};

/**
 * ProfilesApi - object-oriented interface
 * @export
 * @class ProfilesApi
 * @extends {BaseAPI}
 */
export class ProfilesApi extends BaseAPI {
    /**
     * 
     * @summary Get all profiles
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProfilesApi
     */
    public profilesGet(options?: any) {
        return ProfilesApiFp(this.configuration).profilesGet(options)(this.fetch, this.basePath);
    }

    /**
     * 
     * @summary Get profile based on given id parameter
     * @param {number} id Profile id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProfilesApi
     */
    public profilesIdGet(id: number, options?: any) {
        return ProfilesApiFp(this.configuration).profilesIdGet(id, options)(this.fetch, this.basePath);
    }

}
