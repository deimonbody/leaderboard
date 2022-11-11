import axios from 'axios';
import { IUser } from '../common/interfaces';
import { proccesingUserData } from './user.helper';

export const GET_USERS_API_PATH = 'http://coding-test.cube19.io/frontend/v1/starting-state';

export const getUsers = async ():Promise<IUser[] | undefined> => {
  try {
    const response = await axios.get(GET_USERS_API_PATH);
    if (response.status === 200) {
      return proccesingUserData(response.data);
    }
  } catch {
    getUsers();
  }
};
