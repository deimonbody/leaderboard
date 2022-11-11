import React from 'react';
import { IUser } from '@root/common/interfaces';
import headerImg from '../../images/Leader-Score.svg';
import {
  Header, HeaderTitle, HeaderText,
  HeaderLeftBlock, HeaderRightBlock, HeaderImg,
  HeaderUserBlock, HeaderUserImg, HeaderUserInfo,
  HeaderUsersBlock,
} from '../Common';

interface IProps {
  bestUsers:IUser[]
}

export const HeaderEl:React.FC<IProps> = ({ bestUsers }) => (
  <Header>
    <HeaderLeftBlock>
      <HeaderTitle>All-time highest scorers</HeaderTitle>
      <HeaderText>You can be among the leaders already today</HeaderText>
      <HeaderUsersBlock>
        {bestUsers.map((user, index) => (
          <HeaderUserBlock key={index}>
            <HeaderUserImg src={user.src} />
            <HeaderUserInfo>
              {user.name} - {user.score}
            </HeaderUserInfo>
          </HeaderUserBlock>))}
      </HeaderUsersBlock>
    </HeaderLeftBlock>
    <HeaderRightBlock>
      <HeaderImg src={headerImg} />
    </HeaderRightBlock>
  </Header>
);
