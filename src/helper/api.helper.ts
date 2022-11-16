import axios from 'axios';
import { INotFulluser, IUser } from '../common/interfaces';
import { proccesingUserData } from './user.helper';

export const GET_USERS_API_PATH = 'http://coding-test.cube19.io/frontend/v1/starting-state';
export const POST_USER_API_PATH = 'http://coding-test.cube19.io/frontend/v1/process-user';

export const getUsers = async ():Promise<IUser[] | undefined> => {
  const response = await axios.get(GET_USERS_API_PATH);
  return proccesingUserData(response.data);
};
export const addNewUserAPI = async (userName:string):Promise<INotFulluser | undefined> => {
  const response = await axios.post(POST_USER_API_PATH, {
    'username': userName,
  });

  return {
    name: response.data['display-name'] as string,
  };
};

axios.interceptors.response.use((res) => res, async (err) => {
  const { status } = err.response;
  const { responseURL } = err.request;
  if (status === 500) {
    if (responseURL === GET_USERS_API_PATH) {
      const result = await axios.get(GET_USERS_API_PATH);
      return result;
    }
    if (responseURL === POST_USER_API_PATH) {
      const responseData = JSON.parse(err.response.config.data);
      const result = await axios.post(POST_USER_API_PATH, {
        'username': responseData.username,
      });
      return result;
    }
  }
});
