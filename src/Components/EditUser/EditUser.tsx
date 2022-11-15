import { IEditUserForm, IUser } from '@root/common/interfaces';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { useUsersActions } from '../../store/hooks';
import { Modal } from '../Modal/Modal';
import { userFormSchema } from '../../common/schemas';

interface IEditUser {
  closePopUpHandler:()=>void;
  isShow:boolean;
  user:IUser;
}

export const EditUserEl:React.FC<IEditUser> = ({
  closePopUpHandler, isShow, user,
}) => {
  const { updateUserById } = useUsersActions();
  const { control, handleSubmit, reset } = useForm({
    mode: 'onChange',
    defaultValues: {
      'userName': user.name,
      'score': user.score,
    },
    resolver: joiResolver(userFormSchema),
  });

  const closeHandler = () => {
    const bodyElement = document.body;
    bodyElement.style.overflow = 'scroll';
    closePopUpHandler();
  };

  useEffect(() => {
    reset({ userName: user.name, score: user.score });
  }, [user]);

  const onSubmit = (data:IEditUserForm) => {
    updateUserById(user.id, data);
    closeHandler();
  };
  return (
    <Modal
      title="Edit User"
      control={control}
      isShow={isShow}
      submitHandler={handleSubmit(onSubmit)}
      closeHandler={closeHandler}
      reset={reset}
    />
  );
};