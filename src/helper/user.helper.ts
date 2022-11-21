import { v4 as uuidv4 } from 'uuid';
import { INotFulluser, IUser } from '../common/interfaces';
import user1 from '../images/user-1.svg';
import user2 from '../images/user-2.svg';
import user3 from '../images/user-3.svg';
import user4 from '../images/user-4.svg';

const getRandomImg = () => {
  const images = [user1, user2, user3, user4];
  return images[Math.floor(Math.random() * ((images.length - 1) - 0) + 0)];
};
export const sortUser = (data:IUser[]) => data.sort((a, b) => b.score - a.score);
export const proccesingUserData = (data:INotFulluser[]):IUser[] => sortUser(
  data.map((user) => ({
    name: user.name,
    score: user.score || 0,
    src: getRandomImg(),
    id: uuidv4(),
    status: {
      places: null,
      isUp: false,
      isNoChange: true,
      isNoData: false,
    },
  })),
);
export const getUserPositionChange = (user:IUser, prevDayUsers:IUser[], positionId:number):IUser => {
  const findIndex = prevDayUsers.findIndex((prevDayUser) => prevDayUser.name === user.name);
  if (findIndex !== -1) {
    const difference = findIndex - positionId;
    user.status.isNoData = false;
    if (difference > 0) {
      user.status.places = difference;
      user.status.isUp = true;
      user.status.isNoChange = false;
    }
    if (difference < 0) {
      user.status.places = difference * -1;
      user.status.isUp = false;
      user.status.isNoChange = false;
    }
    if (difference === 0) {
      user.status.isNoChange = true;
    }
  } else {
    user.status.isNoData = true;
  }

  return user;
};
export const getPosition = (index:number) => (index < 4 ? `${index}rd` : `${index}th`);

export const mainUsersListProcess = (newUsers:IUser[], previousDayUsers:IUser[] | null) => {
  newUsers = sortUser(newUsers);
  if (previousDayUsers) {
    newUsers = newUsers.map((user, index) => getUserPositionChange(user, previousDayUsers, index));
  }
  return newUsers;
};
export const isUserAlreadyExists = (newUserName:string, currentUsers:IUser[]) => currentUsers.map((user) => user.name).includes(newUserName);
