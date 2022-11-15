import React from 'react';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { IEditUserForm } from '@root/common/interfaces';
import { useUsersActions } from '../../store/hooks';
import { userFormSchema } from '../../common/schemas';
import { Modal } from '../Modal/Modal';

interface IAddUserProps {
  isShow:boolean;
  closePopUpHandler:()=>void;
}
export const AddUser:React.FC<IAddUserProps> = ({ isShow, closePopUpHandler }) => {
  const { addNewUser } = useUsersActions();
  const { control, handleSubmit, reset } = useForm({
    mode: 'onChange',
    defaultValues: {
      'userName': '',
      'score': 0,
    },
    resolver: joiResolver(userFormSchema),
  });
  const closeHandler = () => {
    const bodyElement = document.body;
    bodyElement.style.overflow = 'scroll';
    closePopUpHandler();
  };
  const onSubmit = (data:IEditUserForm) => {
    addNewUser(data.userName, data.score);
    closeHandler();
  };

  return (
    <Modal
      title="Add new User"
      control={control}
      isShow={isShow}
      submitHandler={handleSubmit(onSubmit)}
      closeHandler={closeHandler}
      reset={reset}
    />
  );
};
