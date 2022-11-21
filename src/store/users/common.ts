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
  ADD_NEW_DAY = 'ADD_NEW_DAY',
  SET_LOADER = 'SET_LOADER',
  DAY_CHANGE = 'DAY_CHANGE',
  UPDATE_USERS = 'UPDATE_USERS',
}
export interface IUpdateUsers {
  type:UserActions.UPDATE_USERS,
  payload:IUser[]
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
export interface IDAYCHANGE {
  type:UserActions.DAY_CHANGE,
  payload:number;
}

export type IUserActions = ISetUsers | IAddNewDay | ISetLoader | IDAYCHANGE | IUpdateUsers;
