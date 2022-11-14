import { IEditUserForm, IUser } from '@root/common/interfaces';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { useUsersActions } from '../../store/hooks';
import {
  EditUser, EditUserWrapper, EditUserText, EditUserInput, EditUserBtn, EditUserClose, EditUserBackground,
} from '../Common';
import { schema } from './edit-user.schema';

interface IEditUser {
  closePopUpHandler:()=>void;
  isShow:boolean;
  user:IUser;
}

export const EditUserEl:React.FC<IEditUser> = ({ closePopUpHandler, isShow, user }) => {
  const { updateUserById } = useUsersActions();
  const { control, handleSubmit, reset } = useForm({
    mode: 'onChange',
    defaultValues: {
      'userName': user.name,
      'score': user.score,
    },
    resolver: joiResolver(schema),
  });

  const closeHanlder = () => {
    const bodyElement = document.body;
    bodyElement.style.overflow = 'scroll';
    closePopUpHandler();
  };
  const bodyClickEvent = (event:MouseEvent) => {
    const element = event.target as HTMLElement;
    if (element.hasAttribute('data-is-wrapper')) closeHanlder();
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

  useEffect(() => {
    reset({ userName: user.name, score: user.score });
  }, [user]);

  const onSubmit = (data:IEditUserForm) => {
    updateUserById(user.id, data);
    closeHanlder();
  };

  return (
    <EditUser style={{ display: `${isShow ? 'block' : 'none'}` }} data-is-wrapper="true">
      <EditUserWrapper>
        <EditUserText>Edit User</EditUserText>
        <EditUserInput control={control} name="userName" placeholder="Name" type="text" />
        <EditUserInput control={control} name="score" placeholder="Score" type="number" />
        <EditUserClose onClick={closeHanlder}>x</EditUserClose>
        <EditUserBtn onClick={handleSubmit(onSubmit)}>Send</EditUserBtn>
        <EditUserBackground />
      </EditUserWrapper>
    </EditUser>
  );
};
