import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { IUser } from '@root/common/interfaces';
import { IDay } from '@root/store/users/common';
import { ToastContainer } from 'react-toastify';
import { getUserPositionChange, sortUser } from '../../helper/user.helper';
import { useAppSelector, useUsersActions } from '../../store/hooks';
import { myTheme } from '../../my-theme';
import { MainTitle, Wrapper } from '../Common';
import { HeaderEl } from '../Header/Header';
import { TableEl } from '../Table/Table';
import { EditUserEl } from '../EditUser/EditUser';
import { AddUser } from '../AddUser/AddUser';
import { Loader } from '../Loader/Loader';
import 'react-toastify/dist/ReactToastify.css';

export const App:React.FC = () => {
  const { isLoading, days, currentDay } = useAppSelector((store) => store.users);
  const { setUsers, updateUsers } = useUsersActions();
  const [bestUsers, setBestUsers] = useState<IUser[]>([]);
  const [isShowUserEditPopUp, setIsShowUserEditPopUp] = useState(false);
  const [userEdit, setUserEdit] = useState<IUser | null>(null);
  const [currentUsers, setCurrentUsers] = useState<IUser[]>([]);
  const [currentData, setCurrentData] = useState<IDay | null>(null);
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
      setCurrentData(currentEl);
    }
  }, [days, currentDay]);

  useEffect(() => {
    if (currentUsers && currentUsers.length) {
      setBestUsers(currentUsers.slice(0, 4));
    }
  }, [currentUsers]);

  useEffect(() => {
    if (currentDay !== 0) {
      const prevDayUsers = days[currentDay - 1].users;
      const newUsers = sortUser(days[currentDay].users).map((user, index) => getUserPositionChange(user, prevDayUsers, index));
      updateUsers(newUsers);
    }
  }, [currentDay]);
  if (isLoading || !bestUsers.length) return <Loader />;

  return (
    <>
      <ThemeProvider theme={myTheme}>
        <Wrapper>
          <MainTitle />
          <HeaderEl bestUsers={bestUsers} />
          <TableEl
            sortedUsers={currentUsers}
            showPopUpHandler={showEdituserHandler}
            currentData={currentData as IDay}
            currentDay={currentDay}
            daysLength={days.length}
            showAddUserHandler={showAddUserHandler}
          />
        </Wrapper>
        {userEdit && <EditUserEl
          closePopUpHandler={closeEditUserHandler}
          isShow={isShowUserEditPopUp}
          user={userEdit}
          currentUsers={currentUsers}
          previousDayUsers={currentDay === 0 ? null : days[currentDay - 1].users}
        />}
        <AddUser
          isShow={isShowAddUserPopUp}
          closePopUpHandler={closeAddUserHandler}
          currentUsers={currentUsers}
          previousDayUsers={currentDay === 0 ? null : days[currentDay - 1].users}
        />
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover={false}
          theme="light"
        />
      </ThemeProvider>
    </>
  );
};
