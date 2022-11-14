import React from 'react';
import styled from 'styled-components';
import { Controller, Control } from 'react-hook-form';
import { IEditUserForm } from '../../common/interfaces';
import bg from '../../images/Edit-User-bg.svg';

interface IEditUserInput {
  name:'userName' | 'score';
  control: Control<IEditUserForm> | undefined;
  placeholder:string;
  type:string;
}

export const EditUser = styled.div`
    background-color:#a8a8a882;
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index:10000;
`;
export const EditUserWrapper = styled.div`
    max-width:700px;
    width:100%;
    position:fixed;
    top:50%;
    left:50%;
    z-index:10001;
    box-sizing:border-box;
    background-color:${(props) => props.theme.colors.white};
    transform:translate(-50%,-50%);
   
    padding:80px 60px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    border-radius:${(props) => props.theme.borderRadius};
    @media screen and (max-width:767px){
        max-width:500px;
    }
    @media screen and (max-width:540px){
        max-width:320px;
    }
`;
export const EditUserText = styled.p`
    font-family:${(props) => props.theme.fonts.bold};
    font-size:1.5rem;
    color:${(props) => props.theme.colors.textDarkBlue};
    text-align:center;
    `;
export const EditUserInputStyled = styled.div`
margin-top:40px;
.input{
    border-radius:${(props) => props.theme.borderRadius};
    background-color:transparent;
    color:${(props) => props.theme.colors.textDarkBlue};
    border:1px solid ${(props) => props.theme.colors.textDarkBlue};
    font-family:${(props) => props.theme.fonts.medium};
    font-size:.9rem;
    padding:10px 0 10px 9px;
    box-sizing:border-box;
    width:100%;
    outline:none;
}
`;
export const EditUserBtn = styled.button`
    background-color:${(props) => props.theme.colors.darkBlue};
    color:${(props) => props.theme.colors.white};
    border-radius:${(props) => props.theme.borderRadius};
    align-self:center;
    padding:8px 24px;
    font-size:1rem;
    border:0;
    cursor:pointer;
    margin-top:40px;
`;
export const EditUserClose = styled.div`
    width:30px;
    height:30px;
    font-size:1.2rem;
    color:${(props) => props.theme.colors.textDarkBlue};
    font-family:${(props) => props.theme.fonts.bold};
    cursor:pointer;
    position:absolute;
    top:10px;
    right:10px
`;
export const EditUserBackground = styled.div`
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background-image:url(${bg});
    background-repeat:no-repeat;
    background-position:center;
    background-size:contain;
    z-index:-1;
`;
export const EditUserError = styled.p`
    color:${(props) => props.theme.colors.darkRed};
    font-size:1rem;
    font-family:${(props) => props.theme.fonts.bold};
    position:absolute;
    padding-top:10px;
`;

export const EditUserInput:React.FC<IEditUserInput> = ({
  control, name, placeholder, type,
}) => (
  <Controller
    name={name}
    control={control}
    render={({
      field: {
        onChange, value, ref,
      },
      fieldState: { error },
    }) => <EditUserInputStyled>
      <input
        className="input "
        value={value}
        onChange={onChange}
        ref={ref}
        placeholder={placeholder}
        type={type}
      />
      {error ? <EditUserError>{error.message}</EditUserError> : null}
    </EditUserInputStyled>}
  />
);
