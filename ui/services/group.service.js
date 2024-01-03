import * as HttpService from './http.service';
import { CREATE_GROUP_URL, UPDATE_GROUP_URL, DELETE_GROUP_URL, GET_GROUP_BY_ID_URL, GET_ALL_GROUPS } from './url.service';

export const createGroup = (data) => HttpService.postWithAuth(CREATE_GROUP_URL, data);

export const updateGroup = (id, data) => HttpService.putWithAuth(UPDATE_GROUP_URL(id), data);

export const getAllGroups = () => HttpService.getWithOutAuth(GET_ALL_GROUPS);

export const deleteGroupById = (id, userId) => HttpService.deleteWithAuth(DELETE_GROUP_URL(id, userId))

export const getGroupById = (id) => HttpService.getWithOutAuth(GET_GROUP_BY_ID_URL(id));
