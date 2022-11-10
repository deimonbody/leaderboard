import React from 'react';
import styled from 'styled-components';

const StyledMainTitle = styled.p`
    color:${(props) => props.theme.colors.textDarkBlue};
    font-family:${(props) => props.theme.fonts.bold};
    font-size:1.7rem;
    @media screen and (max-width:992px){
        font-size:1.5rem;
    }
    margin-top:30px;
    margin-bottom:30px;
    padding-left:20px;
`;

export const MainTitle:React.FC = () => <StyledMainTitle>Cube<span style={{ color: '#F99746' }}>19</span>Leaderboard</StyledMainTitle>;
