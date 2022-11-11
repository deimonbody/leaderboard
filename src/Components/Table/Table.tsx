import React from 'react';
import { IUser } from '@root/common/interfaces';
import {
  Table,
  TableFirstLine, TableTitle,
  ControlBlock, ControlBtn,
  TableElements, ControlDay,
  TableElementContainer,
} from '../Common';
import { myTheme } from '../../my-theme';
import { TableElement } from './Components/TableElement';
import { getPosition } from '../../helper/user.helper';

interface IProps {
  sortedUsers:IUser[]
}

export const TableEl:React.FC<IProps> = ({ sortedUsers }) => (
  <Table>
    <TableFirstLine>
      <TableTitle>Leaders table for this period</TableTitle>
      <ControlBlock>
        <TableElementContainer>
          <ControlDay color={myTheme.colors.textDarkBlue}> {'<<'} </ControlDay>
          <ControlDay color="#7B7B7B"> {'>>'} </ControlDay>
        </TableElementContainer>
        <ControlBtn bgColor={myTheme.colors.orange}>New day</ControlBtn>
        <ControlBtn bgColor={myTheme.colors.darkBlue} style={{ marginRight: '0px' }}>Add new user</ControlBtn>
      </ControlBlock>
    </TableFirstLine>
    <TableElements>
      {sortedUsers.map((currentUser, index) => <TableElement user={currentUser} key={index} position={getPosition(index + 1)} />)}
    </TableElements>
  </Table>
);
