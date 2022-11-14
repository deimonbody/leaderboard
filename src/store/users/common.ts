import { IUser } from '@root/common/interfaces';

export interface IState {
  currentUsers:IUser[];
  isLoading:boolean
}
export enum UserActions {
  SET_USERS = 'SET_USERS',
  UPDATE_USER_BY_ID = 'UPDATE_USER_BY_ID',
}

export interface ISetUsers {
  type:UserActions.SET_USERS
  payload:IUser[]
}
export interface IUpdateUser {
  type:UserActions.UPDATE_USER_BY_ID,
  payload:{
    userId:string;
    data:{
      userName:string;
      score:number
    }
  }
}
export type IUserActions = ISetUsers | IUpdateUser;
