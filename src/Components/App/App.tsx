import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { IUser } from '@root/common/interfaces';
import { useUsersActions, useAppSelector } from '../../store/hooks';
import { myTheme } from '../../my-theme';
import { MainTitle, Wrapper } from '../Common';
import { HeaderEl } from '../Header/Header';
import { TableEl } from '../Table/Table';
import { sortUser } from '../../helper/user.helper';

export const App:React.FC = () => {
  const { isLoading, currentUsers } = useAppSelector((store) => store.users);
  const { setUsers } = useUsersActions();
  const [sortedUsers, setSortedUser] = useState<IUser[]>([]);
  const [bestUsers, setBestUsers] = useState<IUser[]>([]);
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
          <TableEl sortedUsers={sortedUsers} />
        </Wrapper>
      </ThemeProvider>
    </>
  );
};
