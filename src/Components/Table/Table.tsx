import React from 'react';
import {
  Table,
  TableFirstLine, TableTitle,
  ControlBlock, ControlBtn,
  TableElements, ControlDay,
  TableElementContainer,
} from '../Common';
import { myTheme } from '../../my-theme';
import { TableElement } from './Components/TableElement';

export const TableEl:React.FC = () => (
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
      <TableElement />
    </TableElements>
  </Table>
);
