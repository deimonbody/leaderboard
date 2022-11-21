import { IEditUserForm, IUser } from '@root/common/interfaces';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { toast } from 'react-toastify';
import { useUsersActions } from '../../store/hooks';
import { Modal } from '../Modal/Modal';
import { userFormSchema } from '../../common/schemas';
import { isUserAlreadyExists } from '../../helper/user.helper';

interface IEditUser {
  closePopUpHandler:()=>void;
  isShow:boolean;
  user:IUser;
  currentUsers:IUser[];
  previousDayUsers:IUser[] | null;
}

export const EditUserEl:React.FC<IEditUser> = ({
  closePopUpHandler, isShow, user, currentUsers, previousDayUsers,
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
    closeHandler();
    const filteredUsers = currentUsers.filter((currentUser) => currentUser.name !== user.name);
    if (isUserAlreadyExists(data.userName, filteredUsers)) {
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
    updateUserById(user.id, data, currentUsers, previousDayUsers);
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
