import axios from 'axios';
import { INotFulluser, IUser } from '../common/interfaces';
import { proccesingUserData } from './user.helper';

export const GET_USERS_API_PATH = 'http://coding-test.cube19.io/frontend/v1/starting-state';
export const POST_USER_API_PATH = 'http://coding-test.cube19.io/frontend/v1/process-user';
export const getUsers = async ():Promise<IUser[] | undefined> => {
  try {
    const response = await axios.get(GET_USERS_API_PATH);
    if (response.status === 200) {
      return proccesingUserData(response.data);
    }
  } catch {
    return getUsers();
  }
};
export const addNewUserAPI = async (userName:string):Promise<INotFulluser | undefined> => {
  try {
    const response = await axios.post(POST_USER_API_PATH, {
      'username': userName,
    });
    if (response.status === 200) {
      return {
        name: response.data['display-name'] as string,
      };
    }
  } catch {
    return addNewUserAPI(userName);
  }
};
