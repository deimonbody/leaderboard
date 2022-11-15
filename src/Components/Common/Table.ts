import styled from 'styled-components';
import { ImageProps, IDayChange } from '../../common/interfaces';
import { Button } from './Button';

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
    @media screen and (max-width:992px){
        font-size:1rem;
    }
    @media screen and (max-width:767px){
        margin-bottom:20px;
        align-self:center;
    }
`;

export const ControlBlock = styled.div`
    display:flex;
    @media screen and (max-width:767px){
       align-self:stretch;
    }
    @media screen and (max-width:576px){
        flex-direction:column;
        align-items:center;
    }
`;

export const ControlBtn = styled(Button)`
   margin-right:10px;
   @media screen and (max-width:992px){
    font-size:.7rem;
   }
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
    @media screen and (max-width:576px){
        margin-bottom:20px;
    }
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
   color:${(props) => (props.isNotValid ? '#7B7B7B' : props.theme.colors.textDarkBlue)}};
   font-family:${(props) => props.theme.fonts.medium};
   cursor:pointer;
   pointer-events: ${(props) => (props.isNotValid ? 'none' : 'auto')}};
`;
export const TableData = styled.p`
    font-size:1rem;
    margin-right:10px;
    font-family:${(props) => props.theme.fonts.bold};
    color:${(props) => props.theme.colors.textDarkBlue};
    @media screen and (max-width:992px){
        font-size:.8rem;
    }
`;
