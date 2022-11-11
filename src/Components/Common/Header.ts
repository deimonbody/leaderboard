import styled from 'styled-components';

export interface ImageProps {
  src:string;
}
export const Header = styled.div`
    background-color:${(props) => props.theme.colors.mainBlue};
    color:${(props) => props.theme.colors.white};
    border-radius:${(props) => props.theme.borderRadius};
    padding:20px;
    display:flex;
`;

export const HeaderTitle = styled.p`
    font-family:${(props) => props.theme.fonts.bold};
    font-size:1.7rem;
    @media screen and (max-width:992px){
        font-size:1.4rem;   
    }
    margin-bottom:8px;
`;

export const HeaderText = styled.p`
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
        min-height:213px;
    }
    @media screen and (max-width:992px){
        padding-left:15px;
    }
    @media screen and (min-width:1200px){
        min-height:247px;
        top:30%;
    }
`;
export const HeaderUserBlock = styled.div`
    display:flex;
    flex-direction:column;
    flex-basis:17%;
    justify-content:center;
    align-items:center;
    margin-right:20px;
    @media screen and (max-width:992px){
        flex-basis:80px;
        flex-grow:0;
        flex-shrink:0;
    }
`;
export const HeaderUserImg = styled.img.attrs<ImageProps>((props) => ({ src: props.src }))`
    width:100%;
    height:100%;
    object-fit:contain;
     object-position:center;
     box-sizing:border-box;
     `;
export const HeaderUserInfo = styled.p`
    font-family:${(props) => props.theme.fonts.reg};
    font-size:.9rem;
`;
export const HeaderUsersBlock = styled.div`
    display:flex;
    margin-top:10px;
     @media screen and (max-width:992px){
        overflow-x:scroll
    }
`;
