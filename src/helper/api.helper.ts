import instance from '../config/axios.config';
import { GET_USERS_API_PATH, POST_USER_API_PATH } from '../common/urls';
import { INotFulluser, IUser } from '../common/interfaces';
import { proccesingUserData } from './user.helper';

export const getUsers = async ():Promise<IUser[] | undefined> => {
  const response = await instance.get(GET_USERS_API_PATH);
  return proccesingUserData(response.data);
};
export const addNewUserAPI = async (userName:string):Promise<INotFulluser | undefined> => {
  const response = await instance.post(POST_USER_API_PATH, {
    'username': userName,
  });

  return {
    name: response.data['display-name'] as string,
  };
};
