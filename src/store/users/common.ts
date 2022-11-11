import { IUser } from '@root/common/interfaces';

export interface IState {
  currentUsers:IUser[];
}

export type IUserActions = {
  type:string;
  actions?:any;
};
