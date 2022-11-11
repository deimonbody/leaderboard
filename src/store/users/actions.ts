import { IUser } from '@root/common/interfaces';
import { Dispatch } from 'redux';
import { getUsers } from '../../helper/api.helper';
import { IUserActions, UserActions } from './common';

export const setUsers = () => async (dispatch:Dispatch<IUserActions>) => {
  const result = await getUsers() as IUser[];
  dispatch({
    type: UserActions.SET_USERS,
    payload: result,
  });
};
