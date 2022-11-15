import { IUser } from '@root/common/interfaces';

export interface IDay {
  dayTime:string;
  users:IUser[];
}
export interface IState {
  days:IDay[];
  isLoading:boolean
  currentDay:number;
}
export enum UserActions {
  SET_USERS = 'SET_USERS',
  UPDATE_USER_BY_ID = 'UPDATE_USER_BY_ID',
  ADD_NEW_DAY = 'ADD_NEW_DAY',
  SET_LOADER = 'SET_LOADER',
  DAY_CHANGE = 'DAY_CHANGE',
  ADD_NEW_USER = 'ADD_NEW_USER',
}
export interface IAddNewDay {
  type:UserActions.ADD_NEW_DAY,
  payload:{
    users:IUser[],
    dayTime:string;
  }
}
export interface ISetLoader {
  type:UserActions.SET_LOADER
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
export interface IDAYCHANGE {
  type:UserActions.DAY_CHANGE,
  payload:number;
}
export interface IAddNewUser {
  type:UserActions.ADD_NEW_USER,
  payload:IUser
}
export type IUserActions = ISetUsers | IUpdateUser | IAddNewDay | ISetLoader | IDAYCHANGE | IAddNewUser;
