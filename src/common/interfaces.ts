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
