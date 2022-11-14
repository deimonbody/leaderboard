import React from 'react';
import { IUser } from '@root/common/interfaces';
import {
  TableElementStyled, TableElementContainer,
  TableElementPosition, TableElementImg, TableElementPoints,
  TableElementName, TableElementPlace, TableElementEdit,
} from '../../Common';
import editUser from '../../../images/Edit-User.svg';

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
      <TableElementPlace>no changes</TableElementPlace>
      <TableElementEdit src={editUser} onClick={showPopUpHandler} />
    </TableElementContainer>
  </TableElementStyled>
);
