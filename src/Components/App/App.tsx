import React from 'react';
import { ThemeProvider } from 'styled-components';
import { myTheme } from '../../my-theme';
import { MainTitle } from '../Common/MainTitle';
import { Wrapper } from '../Common/Wrapper';
import { Header } from '../Header/Header';
import { Table } from '../Table/Table';

export const App:React.FC = () => (
  <>
    <ThemeProvider theme={myTheme}>
      <Wrapper>
        <MainTitle />
        <Header />
        <Table />
      </Wrapper>
    </ThemeProvider>
  </>);
