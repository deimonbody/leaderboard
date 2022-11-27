import React from 'react';
import { IUser } from '@root/common/interfaces';
import {
  TableElementStyled, TableElementContainer,
  TableElementPosition, TableElementImg, TableElementPoints,
  TableElementName, TableElementEdit,
} from '../../Common';
import editUser from '../../../images/Edit-User.svg';
import { UserPlace } from './UserPlace';

interface IProps {
  user:IUser;
  position:string;
  showPopUpHandler:()=>void;
}

export const TableElement:React.FC<IProps> = ({ user, position, showPopUpHandler }) => (
  <TableElementStyled>
    <TableElementContainer>
      <TableElementPosition>{position}</TableElementPosition>
      <TableElementImg src={user.src} />
      <TableElementPoints>{user.score}</TableElementPoints>
      <TableElementName>{user.name}</TableElementName>
    </TableElementContainer>
    <TableElementContainer>
      <UserPlace status={user.status} />
      <TableElementEdit src={editUser} onClick={showPopUpHandler} />
    </TableElementContainer>
  </TableElementStyled>
);
