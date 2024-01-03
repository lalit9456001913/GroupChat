import * as HttpService from './http.service';
import { GET_ALL_GROUP_MESSAGE_URL } from './url.service';


export const getAllGroupMessages = (id) => HttpService.getWithOutAuth(GET_ALL_GROUP_MESSAGE_URL(id));

