import React from 'react';
import { ThemeProvider } from 'styled-components';
import { myTheme } from '../../my-theme';
import { MainTitle, Wrapper } from '../Common';
import { HeaderEl } from '../Header/Header';
import { TableEl } from '../Table/Table';

export const App:React.FC = () => (
  <>
    <ThemeProvider theme={myTheme}>
      <Wrapper>
        <MainTitle />
        <HeaderEl />
        <TableEl />
      </Wrapper>
    </ThemeProvider>
  </>);
