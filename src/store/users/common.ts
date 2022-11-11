import { IUser } from '@root/common/interfaces';

export interface IState {
  currentUsers:IUser[];
  isLoading:boolean
}
export enum UserActions {
  SET_USERS = 'SET_USERS',
}

export interface ISetUsers {
  type:UserActions.SET_USERS
  payload:IUser[]
}

export type IUserActions = ISetUsers;
