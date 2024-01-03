import * as HttpService from './http.service';
import { URER_LOGIN_URL, CREATE_USER_URL, UPDATE_USER_URL, GET_ALL_USERS_URL, DELETE_USER_URL, GET_USER_BY_ID_URL } from './url.service';

export const loginUser = (data) => HttpService.postWithOutAuth(URER_LOGIN_URL, data);

export const createUser = (data) => HttpService.postWithAuth(CREATE_USER_URL, data);

export const updateUser = (id, data) => HttpService.putWithAuth(UPDATE_USER_URL(id), data);

export const getAllUsers = () => HttpService.getWithAuth(GET_ALL_USERS_URL());

export const deleteUser = (id) => HttpService.deleteWithOutAuth(DELETE_USER_URL(id));

export const getUserById = (id) => HttpService.getWithOutAuth(GET_USER_BY_ID_URL(id));