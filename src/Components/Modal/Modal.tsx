import React, { useEffect } from 'react';
import { Control, UseFormReset } from 'react-hook-form';
import {
  EditUserBackground, EditUserBtn, EditUserClose, EditUserInput, EditUserText, EditUserWrapper, ModalWrapper,
} from '../Common/EditUser';

interface IModalProps {
  title:string;
  control:Control<any>;
  submitHandler:()=>void;
  closeHandler:()=>void;
  isShow:boolean;
  reset:UseFormReset<any>;
}
export const Modal:React.FC<IModalProps> = ({
  title, control, submitHandler, closeHandler, isShow, reset,
}) => {
  const bodyClickEvent = (event:MouseEvent) => {
    const element = event.target as HTMLElement;
    if (element.hasAttribute('data-is-wrapper')) closeHandler();
  };
  useEffect(() => {
    const bodyElement = document.body;
    if (isShow) {
      bodyElement.style.overflow = 'hidden';
      bodyElement.addEventListener('click', bodyClickEvent);
    }
    return () => {
      reset();
      bodyElement.removeEventListener('click', bodyClickEvent);
    };
  }, [isShow]);
  return (
    <ModalWrapper style={{ display: `${isShow ? 'block' : 'none'}` }} data-is-wrapper="true">
      <EditUserWrapper>
        <EditUserText>{title}</EditUserText>
        <EditUserInput control={control} name="userName" placeholder="Name" type="text" />
        <EditUserInput control={control} name="score" placeholder="Score" type="number" />
        <EditUserClose onClick={closeHandler}>x</EditUserClose>
        <EditUserBtn onClick={submitHandler}>Send</EditUserBtn>
        <EditUserBackground />
      </EditUserWrapper>
    </ModalWrapper>
  );
};
