import React from 'react';
import { myTheme } from '../../my-theme';
import {
  TableStyled,
  TableFirstLine, TableTitle,
  ControlBlock, ControlBtn,
  TableElements, ControlDay,
  TableElementContainer,
} from '../Common/Table';
import { TableElement } from './Components/TableElement';

export const Table:React.FC = () => (
  <TableStyled>
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
  </TableStyled>
);
