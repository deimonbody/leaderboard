import { Control } from 'react-hook-form';

export interface IUser {
  name:string;
  score:number;
  src:string;
  id:string;
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
