import React from 'react';
import headerImg from '../../images/Leader-Score.svg';
import {
  Header, HeaderTitle, HeaderText,
  HeaderLeftBlock, HeaderRightBlock, HeaderImg,
  HeaderUserBlock, HeaderUserImg, HeaderUserInfo,
  HeaderUsersBlock,
} from '../Common';
import userImg1 from '../../images/user-1.svg';

export const HeaderEl:React.FC = () => (
  <Header>
    <HeaderLeftBlock>
      <HeaderTitle>All-time highest scorers</HeaderTitle>
      <HeaderText>You can be among the leaders already today</HeaderText>
      <HeaderUsersBlock>
        <HeaderUserBlock>
          <HeaderUserImg src={userImg1} />
          <HeaderUserInfo>
            Petr - 12
          </HeaderUserInfo>
        </HeaderUserBlock>
        <HeaderUserBlock>
          <HeaderUserImg src={userImg1} />
          <HeaderUserInfo>
            Petr - 12
          </HeaderUserInfo>
        </HeaderUserBlock>
        <HeaderUserBlock>
          <HeaderUserImg src={userImg1} />
          <HeaderUserInfo>
            Petr - 12
          </HeaderUserInfo>
        </HeaderUserBlock>
        <HeaderUserBlock>
          <HeaderUserImg src={userImg1} />
          <HeaderUserInfo>
            Petr - 12
          </HeaderUserInfo>
        </HeaderUserBlock>
      </HeaderUsersBlock>

    </HeaderLeftBlock>
    <HeaderRightBlock>
      <HeaderImg src={headerImg} />
    </HeaderRightBlock>
  </Header>
);
