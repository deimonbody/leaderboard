import React from 'react';
import {
  HeaderStyled, HeaderTitleStyled, HeaderTextStyled,
  HeaderLeftBlock, HeaderRightBlock, HeaderImg,
  HeaderUserBlock, HeaderUserImg, HeaderUserInfo,
  HeaderUsersBlock,
} from '../Common/Header';
import headerImg from '../../images/Leader-Score.svg';
import userImg1 from '../../images/user-1.svg';

export const Header:React.FC = () => (
  <HeaderStyled>
    <HeaderLeftBlock>
      <HeaderTitleStyled>All-time highest scorers</HeaderTitleStyled>
      <HeaderTextStyled>You can be among the leaders already today</HeaderTextStyled>
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
  </HeaderStyled>
);
