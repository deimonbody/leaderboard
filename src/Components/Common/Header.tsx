import styled from 'styled-components';

export interface ImageProps {
  src:string;
}
export const HeaderStyled = styled.div`
    background-color:${(props) => props.theme.colors.mainBlue};
    color:${(props) => props.theme.colors.white};
    border-radius:${(props) => props.theme.borderRadius};
    padding:20px;
    display:flex;
`;

export const HeaderTitleStyled = styled.p`
    font-family:${(props) => props.theme.fonts.bold};
    font-size:1.7rem;
    @media screen and (max-width:992px){
        font-size:1.4rem;   
    }
    margin-bottom:8px;
`;

export const HeaderTextStyled = styled.p`
font-family:${(props) => props.theme.fonts.reg};
    font-size:1.2rem;
    @media screen and (max-width:992px){
        font-size:1rem;   
    }
`;
export const HeaderLeftBlock = styled.div`
    display:flex;
    flex-direction:column;
    flex-basis:50%;
    @media screen and (max-width:768px){
        flex-basis:100%
    }
`;
export const HeaderRightBlock = styled.div`
    flex-basis:50%;
    position:relative;
     @media screen and (max-width:768px){
        display:none;
    }
`;
export const HeaderImg = styled.img.attrs<ImageProps>((props) => ({ src: props.src }))`
    position:absolute;
    width:100%;
    height:120%;
    object-fit:contain;
    object-position:center;
    top:40%;
    left:50%;
    transform:translate(-50%,-50%);
    @media screen and (max-width:1200px){
        min-height:230px;
    }
    @media screen and (max-width:992px){
        padding-left:15px;
    }
    @media screen and (min-width:1200px){
        min-height:290px;
        top:30%;
    }
`;
export const HeaderUserBlock = styled.div`
    display:flex;
    flex-direction:column;
    &:not(:last-child){
        padding-right:20px;    
    }
    flex-basis:15%;
    @media screen and (max-width:992px){
        flex-basis:100px;
        flex-grow:0;
        flex-shrink:0;
        &:not(:last-child){
            padding-right:0px;    
        }
    }
`;
export const HeaderUserImg = styled.img.attrs<ImageProps>((props) => ({ src: props.src }))`
    width:100%;
    height:100%;
    object-fit:contain;
     object-position:center;
     box-sizing:border-box;
     @media screen and (max-width:992px){
       padding:20px 20px 0 0px;
    }
 `;
export const HeaderUserInfo = styled.p`
    font-family:${(props) => props.theme.fonts.reg};
    font-size:1rem;
    @media screen and (max-width:992px){
        font-size:.9rem;
        padding-left:5px;
    }
`;
export const HeaderUsersBlock = styled.div`
    display:flex;
    margin-top:10px;
     @media screen and (max-width:992px){
        overflow-x:scroll
    }
`;
