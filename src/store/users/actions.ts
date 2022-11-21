import { IUser, IEditUserForm, INotFulluser } from '@root/common/interfaces';
import { Dispatch } from 'redux';
import dayjs from 'dayjs';
import { addNewUserAPI, getUsers } from '../../helper/api.helper';
import { IUpdateUser, IUserActions, UserActions } from './common';
import { proccesingUserData } from '../../helper/user.helper';

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

export const addNewDay = (previousDay:string) => async (dispatch:Dispatch<IUserActions>) => {
  const result = await getUsers() as IUser[];
  const newDay = dayjs(dayjs(previousDay)).add(1, 'day').toString();
  dispatch({
    type: UserActions.ADD_NEW_DAY,
    payload: {
      users: result,
      dayTime: newDay,
    },
  });
};
export const setLoading = () => ({
  type: UserActions.SET_LOADER,
});
export const changeDay = (newDayCount:number) => ({
  type: UserActions.DAY_CHANGE,
  payload: newDayCount,
});
export const addNewUser = (name:string, score:number) => async (dispatch:Dispatch<IUserActions>) => {
  const notFullNewUser = await addNewUserAPI(name) as INotFulluser;
  notFullNewUser.score = score;
  const [fullNewUser] = proccesingUserData([notFullNewUser]);
  dispatch({
    type: UserActions.ADD_NEW_USER,
    payload: fullNewUser,
  });
};
