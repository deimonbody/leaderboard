import { Control } from 'react-hook-form';

export interface IStatus {
  places:null | number,
  isUp:boolean;
  isNoChange:boolean;
  isNoData:boolean;
}
export interface IUser {
  name:string;
  score:number;
  src:string;
  id:string;
  status:IStatus;
}
export interface INotFulluser {
  name:string;
  score?:number;
}

export interface IEditUserForm {
  userName:string;
  score:number;
}
export interface IEditUserInput {
  name:'userName' | 'score';
  control: Control<IEditUserForm> | undefined;
  placeholder:string;
  type:string;
}
export interface IButton {
  bgColor:string
}
export interface ImageProps {
  src:string;
}
export interface IWrapper {
  children:JSX.Element | JSX.Element[]
}
export interface IDayChange {
  isNotValid:boolean;
}
export interface IUserPlace {
  color:string;
}
