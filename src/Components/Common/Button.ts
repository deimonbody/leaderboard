import styled from 'styled-components';

interface IButton {
  bgColor:string
}
export const Button = styled.button<IButton>`
    border-radius:${(props) => props.theme.borderRadius};
    color:${(props) => props.theme.colors.white};
    padding:8px 24px;
    background-color:${(props) => props.bgColor};
    cursor:pointer;
    border:0;
    font-family:${(props) => props.theme.fonts.bold}
`;
