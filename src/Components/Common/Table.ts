import styled from 'styled-components';
import { Button } from './Button';
import { ImageProps } from './Header';

interface IDayChange {
  color:string;
}

export const Table = styled.div`
    margin-top:20px;
    border-radius:${(props) => props.theme.borderRadius};
    background-color:${(props) => props.theme.colors.white};
    display:flex;
    flex-direction:column;
    padding:20px;
`;
export const TableFirstLine = styled.div`
 display:flex;
 justify-content:space-between;
 align-items:center;
 @media screen and (max-width:767px){
       flex-direction:column;
       justify-content:flex-start;
       align-items:flex-start;
    }
`;
export const TableTitle = styled.p`
    font-family:${(props) => props.theme.fonts.medium};
    color:${(props) => props.theme.colors.textDarkBlue};
    font-size:1.2rem;
    @media screen and (max-width:767px){
        margin-top:10px;
        align-self:center;
        order:1;
    }
`;

export const ControlBlock = styled.div`
    display:flex;
    @media screen and (max-width:767px){
       align-self:flex-end;
    }
`;

export const ControlBtn = styled(Button)`
   margin-right:10px;
   @media screen and (max-width:767px){
    padding:8px 18px;
   }
`;
export const TableElementStyled = styled.div`
    margin-bottom:8px;
    display:flex;
    justify-content:space-between;
    padding:20px;
    border-radius:${(props) => props.theme.borderRadius};
    background-color:#DBDBDB;
`;
export const TableElementContainer = styled.div`
display:flex;
align-items:center;
`;
export const TableElementPosition = styled.p`
    color:${(props) => props.theme.colors.userPostion};
    font-family:${(props) => props.theme.fonts.medium};
    font-size:1.1rem;
    margin-right:30px;
    @media screen and (max-widtH:767px){
        margin-right:10px;
    }
`;

export const TableElementImg = styled.img.attrs<ImageProps>((props) => ({ src: props.src }))`
    width:45px;
    height:45px;
    flex-grow:0;
    flex-shrink:0;
    margin-right:30px;
    @media screen and (max-widtH:767px){
        margin-right:10px;
    }
`;
export const TableElementPoints = styled.p`
    color:#000000;
    font-family:${(props) => props.theme.fonts.bold};
    font-size:1.1rem;
    margin-right:30px;
    @media screen and (max-widtH:767px){
        margin-right:10px;
    }
`;
export const TableElementName = styled.p`
    color:#000000;
    font-family:${(props) => props.theme.fonts.reg};
    font-size:.9rem;

`;
export const TableElementPlace = styled.p`
    color:${(props) => props.theme.colors.orange};
    font-family:${(props) => props.theme.fonts.medium};
    font-size:.9rem;
    margin-right:8px;
    @media screen and (max-width:767px){
        margin-right:0;
    }
`;
export const TableElements = styled.div`
display:flex;
flex-direction:column;
margin-top:20px;
`;
export const TableElementEdit = styled.img.attrs<ImageProps>((props) => ({ src: props.src }))`
    width:25px;
    height:25px;
    flex-grow:0;
    flex-shrink:0;
    margin-left:10px;
    cursor:pointer;
`;
export const ControlDay = styled.div<IDayChange>`
   margin-right:10px;
   color:${(props) => props.color};
   font-family:${(props) => props.theme.fonts.medium};
`;
