import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { IUser } from '@root/common/interfaces';
import { useAppSelector, useUsersActions } from '../../store/hooks';
import { myTheme } from '../../my-theme';
import { MainTitle, Wrapper } from '../Common';
import { HeaderEl } from '../Header/Header';
import { TableEl } from '../Table/Table';
import { sortUser } from '../../helper/user.helper';
import { EditUserEl } from '../EditUser/EditUser';
import { AddUser } from '../AddUser/AddUser';
import { Loader } from '../Loader/Loader';

export const App:React.FC = () => {
  const { isLoading, days, currentDay } = useAppSelector((store) => store.users);
  const { setUsers } = useUsersActions();
  const [sortedUsers, setSortedUser] = useState<IUser[]>([]);
  const [bestUsers, setBestUsers] = useState<IUser[]>([]);
  const [isShowUserEditPopUp, setIsShowUserEditPopUp] = useState(false);
  const [userEdit, setUserEdit] = useState<IUser | null>(null);
  const [currentUsers, setCurrentUsers] = useState<IUser[]>([]);
  const [currentData, setCurrentData] = useState('');
  const [isShowAddUserPopUp, setIsShowAddUserPopUp] = useState(false);

  const showAddUserHandler = () => setIsShowAddUserPopUp(true);
  const closeAddUserHandler = () => setIsShowAddUserPopUp(false);
  const closeEditUserHandler = () => setIsShowUserEditPopUp(false);
  const showEdituserHandler = (userId:string) => {
    const currentUser = currentUsers.find((user) => user.id === userId) as IUser;
    setUserEdit(currentUser);
    setIsShowUserEditPopUp(true);
  };

  useEffect(() => {
    if (!days.length) setUsers();
  }, []);

  useEffect(() => {
    if (days && days.length) {
      const currentEl = days[currentDay];
      setCurrentUsers(currentEl.users);
      setCurrentData(currentEl.dayTime);
    }
  }, [days, currentDay]);

  useEffect(() => {
    if (currentUsers && currentUsers.length) {
      setSortedUser(sortUser(currentUsers));
    }
  }, [currentUsers]);

  useEffect(() => {
    if (sortedUsers && sortedUsers.length) {
      setBestUsers(sortedUsers.slice(0, 4));
    }
  }, [sortedUsers]);

  if (isLoading || !sortedUsers.length || !bestUsers.length) return <Loader />;
  return (
    <>
      <ThemeProvider theme={myTheme}>
        <Wrapper>
          <MainTitle />
          <HeaderEl bestUsers={bestUsers} />
          <TableEl
            sortedUsers={sortedUsers}
            showPopUpHandler={showEdituserHandler}
            currentData={currentData}
            currentDay={currentDay}
            daysLength={days.length}
            showAddUserHandler={showAddUserHandler}
          />
        </Wrapper>
        {userEdit && <EditUserEl
          closePopUpHandler={closeEditUserHandler}
          isShow={isShowUserEditPopUp}
          user={userEdit}
        />}
        <AddUser isShow={isShowAddUserPopUp} closePopUpHandler={closeAddUserHandler} />
      </ThemeProvider>
    </>
  );
};
