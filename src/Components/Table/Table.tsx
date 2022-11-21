import React from 'react';
import { IUser } from '@root/common/interfaces';
import dayjs from 'dayjs';
import { useUsersActions } from '../../store/hooks';
import {
  Table,
  TableFirstLine, TableTitle,
  ControlBlock, ControlBtn,
  TableElements, ControlDay,
  TableElementContainer,
  TableData,
} from '../Common';
import { myTheme } from '../../my-theme';
import { TableElement } from './Components/TableElement';
import { getPosition } from '../../helper/user.helper';

interface IProps {
  sortedUsers:IUser[]
  showPopUpHandler:(userId:string)=>void;
  currentData:string;
  daysLength:number;
  currentDay:number;
  showAddUserHandler:()=>void;
}

export const TableEl:React.FC<IProps> = ({
  sortedUsers, showPopUpHandler, currentData, daysLength, currentDay,
  showAddUserHandler,
}) => {
  const {
    addNewDay, setLoading, changeDay,
  } = useUsersActions();
  const addNewDayHandlder = () => {
    setLoading();
    addNewDay(currentData);
  };
  const prevDay = () => changeDay(currentDay - 1);
  const nextDay = () => changeDay(currentDay + 1);

  return (
    <Table>
      <TableFirstLine>
        <TableTitle>Leaders table for this period</TableTitle>
        <ControlBlock>
          <TableElementContainer style={{ flexGrow: 1 }}>
            <TableData>{dayjs(currentData).format('DD-MMMM')}</TableData>
            <ControlDay isNotValid={currentDay - 1 < 0} onClick={prevDay}> {'<<'} </ControlDay>
            <ControlDay isNotValid={currentDay + 1 > daysLength - 1} onClick={nextDay}> {'>>'} </ControlDay>
          </TableElementContainer>
          <div>
            <ControlBtn bgColor={myTheme.colors.orange} onClick={addNewDayHandlder}>New day</ControlBtn>
            <ControlBtn
              bgColor={myTheme.colors.darkBlue}
              onClick={showAddUserHandler}
              style={{ marginRight: '0px' }}
            >Add new user</ControlBtn>
          </div>
        </ControlBlock>
      </TableFirstLine>
      <TableElements>
        {sortedUsers.map((currentUser, index) => <TableElement
          showPopUpHandler={() => { showPopUpHandler(currentUser.id); }}
          user={currentUser}
          key={currentUser.id}
          position={getPosition(index + 1)}
        />)}
      </TableElements>
    </Table>
  );
};
