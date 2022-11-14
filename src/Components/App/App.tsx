import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { IUser } from '@root/common/interfaces';
import { useUsersActions, useAppSelector } from '../../store/hooks';
import { myTheme } from '../../my-theme';
import { MainTitle, Wrapper } from '../Common';
import { HeaderEl } from '../Header/Header';
import { TableEl } from '../Table/Table';
import { sortUser } from '../../helper/user.helper';
import { EditUserEl } from '../EditUser/EditUser';

export const App:React.FC = () => {
  const { isLoading, currentUsers } = useAppSelector((store) => store.users);
  const { setUsers } = useUsersActions();
  const [sortedUsers, setSortedUser] = useState<IUser[]>([]);
  const [bestUsers, setBestUsers] = useState<IUser[]>([]);
  const [isShowPopUp, setIsShowPopUp] = useState(false);
  const [userEdit, setUserEdit] = useState<IUser | null>(null);

  const showPopUpHandler = (userId:string) => {
    const currentUser = currentUsers.find((user) => user.id === userId) as IUser;
    setUserEdit(currentUser);
    setIsShowPopUp(true);
  };
  const closePopUpHandler = () => setIsShowPopUp(false);
  useEffect(() => {
    setUsers();
  }, []);
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

  if (isLoading || !sortedUsers.length || !bestUsers.length) return <p>Loading...</p>;
  return (
    <>
      <ThemeProvider theme={myTheme}>
        <Wrapper>
          <MainTitle />
          <HeaderEl bestUsers={bestUsers} />
          <TableEl sortedUsers={sortedUsers} showPopUpHandler={showPopUpHandler} />
        </Wrapper>
        {userEdit && <EditUserEl
          closePopUpHandler={closePopUpHandler}
          isShow={isShowPopUp}
          user={userEdit}
        />}
      </ThemeProvider>
    </>
  );
};
