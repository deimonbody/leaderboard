import { IUser, IEditUserForm } from '@root/common/interfaces';
import { Dispatch } from 'redux';
import { getUsers } from '../../helper/api.helper';
import { IUpdateUser, IUserActions, UserActions } from './common';

export const setUsers = () => async (dispatch:Dispatch<IUserActions>) => {
  const result = await getUsers() as IUser[];
  dispatch({
    type: UserActions.SET_USERS,
    payload: result,
  });
};
export const updateUserById = (userId:string, data:IEditUserForm):IUpdateUser => ({
  type: UserActions.UPDATE_USER_BY_ID,
  payload: {
    userId,
    data: {
      userName: data.userName,
      score: data.score,
    },
  },
});
