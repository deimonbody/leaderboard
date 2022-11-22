import { IUser, IEditUserForm, INotFulluser } from '@root/common/interfaces';
import { Dispatch } from 'redux';
import dayjs from 'dayjs';
import { addNewUserAPI, getUsers } from '../../helper/api.helper';
import {
  IDay, IUserActions, UserActions,
} from './common';
import {
  getUserPositionChange, mainUsersListProcess, proccesingUserData,
} from '../../helper/user.helper';

export const setUsers = () => async (dispatch:Dispatch<IUserActions>) => {
  const result = await getUsers() as IUser[];
  dispatch({
    type: UserActions.SET_USERS,
    payload: result,
  });
};

export const addNewDay = (previousDay:IDay) => async (dispatch:Dispatch<IUserActions>) => {
  const users = await getUsers() as IUser[];
  const result = users.map((user, index) => getUserPositionChange(user, previousDay.users, index));
  const newDay = dayjs(dayjs(previousDay.dayTime)).add(1, 'day').toString();
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

export const addNewUser = (name:string, score:number, users:IUser[], previousDayUsers:IUser[] | null) => async (dispatch:Dispatch<IUserActions>) => {
  const notFullNewUser = await addNewUserAPI(name) as INotFulluser;
  notFullNewUser.score = score;
  const [fullNewUser] = proccesingUserData([notFullNewUser]);
  let newUsers = JSON.parse(JSON.stringify(users));
  newUsers.push(fullNewUser);
  newUsers = mainUsersListProcess(newUsers, previousDayUsers);
  dispatch({
    type: UserActions.UPDATE_USERS,
    payload: newUsers,
  });
};
export const updateUsers = (newUsers:IUser[]) => ({
  type: UserActions.UPDATE_USERS,
  payload: newUsers,
});
export const updateUserById = (userId:string, data:IEditUserForm, users:IUser[], previousDayUsers:IUser[] | null) => {
  let newUsers = JSON.parse(JSON.stringify(users)) as IUser[];
  newUsers = newUsers.map((user) => {
    const newUser = { ...user };
    if (user.id === userId) {
      newUser.name = data.userName;
      newUser.score = data.score;
    }
    return newUser;
  });
  newUsers = mainUsersListProcess(newUsers, previousDayUsers);
  return {
    type: UserActions.UPDATE_USERS,
    payload: newUsers,
  };
};
