import React from 'react';
import {
  TableElementStyled, TableElementContainer,
  TableElementPosition, TableElementImg, TableElementPoints,
  TableElementName, TableElementPlace, TableElementEdit,
} from '../../Common';
import user1 from '../../../images/user-1.svg';
import editUser from '../../../images/Edit-User.svg';

export const TableElement = () => (
  <TableElementStyled>
    <TableElementContainer>
      <TableElementPosition>1rd</TableElementPosition>
      <TableElementImg src={user1} />
      <TableElementPoints>12</TableElementPoints>
      <TableElementName>Peter</TableElementName>
    </TableElementContainer>
    <TableElementContainer>
      <TableElementPlace>no changes</TableElementPlace>
      <TableElementEdit src={editUser} />
    </TableElementContainer>
  </TableElementStyled>
);
