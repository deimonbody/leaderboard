import React from 'react';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { IEditUserForm, IUser } from '@root/common/interfaces';
import { toast } from 'react-toastify';
import { useUsersActions } from '../../store/hooks';
import { userFormSchema } from '../../common/schemas';
import { Modal } from '../Modal/Modal';
import { isUserAlreadyExists } from '../../helper/user.helper';

interface IAddUserProps {
  isShow:boolean;
  closePopUpHandler:()=>void;
  currentUsers:IUser[];
  previousDayUsers:IUser[] | null;
}
export const AddUser:React.FC<IAddUserProps> = ({
  isShow, closePopUpHandler, currentUsers, previousDayUsers,
}) => {
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
    closeHandler();
    if (isUserAlreadyExists(data.userName, currentUsers)) {
      toast.error('The name already exists', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      return;
    }
    addNewUser(data.userName, data.score, currentUsers, previousDayUsers);
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
