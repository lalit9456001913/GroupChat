const ApiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

const UrlParamsReplace = (url, params = {}) => {
    let urlWithPrefix = `${ApiUrl}${url}`;
    if (params) {
        Object.keys(params).forEach(
            (key) => (urlWithPrefix = urlWithPrefix.replace(`:${key}`, params[key]))
        );
    }
    return urlWithPrefix;
};

export const URER_LOGIN_URL = UrlParamsReplace('/login');
export const CREATE_USER_URL = UrlParamsReplace('/users');
export const UPDATE_USER_URL = (id) => UrlParamsReplace('/users/:id', { id });
export const DELETE_USER_URL = (id) => UrlParamsReplace("/users/:id", { id });
export const GET_ALL_USERS_URL = () => UrlParamsReplace("/users");
export const GET_USER_BY_ID_URL = (id) => UrlParamsReplace("/users/:id", { id });


export const CREATE_GROUP_URL = UrlParamsReplace('/groups');
export const UPDATE_GROUP_URL = (id, userId) => UrlParamsReplace('/groups/:id/users/:userId', { id, userId });
export const DELETE_GROUP_URL = (id, userId) => UrlParamsReplace('/groups/:id/users/:userId', { id, userId });
export const GET_GROUP_BY_ID_URL = (id) => UrlParamsReplace("/groups/:id", { id });
export const GET_ALL_GROUPS = UrlParamsReplace("/groups");

export const GET_ALL_GROUP_MESSAGE_URL = (id) => UrlParamsReplace('/groups/:id/messages', { id })