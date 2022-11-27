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
const sortUsersByAlphabet = (data:IUser[]) => data.sort((a, b) => {
  const aName = a.name.toLocaleLowerCase();
  const bName = b.name.toLocaleLowerCase();
  if (aName < bName) return -1;
  if (aName > bName) return 1;
  return 0;
});
export const sortUser = (data:IUser[]) => {
  if (data.length === 1) return data;
  let users = JSON.parse(JSON.stringify(data)) as IUser[];
  users = users.sort((a, b) => b.score - a.score);
  let beforeEnd = null;
  let countOfElements = 0;
  for (let i = 0; i < users.length; i += 1) {
    if (i !== users.length - 1 && users[i].score === users[i + 1].score) {
      if (beforeEnd === null) beforeEnd = i;
      countOfElements += 1;
    } else if (countOfElements) {
      let equalUsersScore = users.slice(beforeEnd as number, beforeEnd as number + countOfElements + 1);
      equalUsersScore = sortUsersByAlphabet(equalUsersScore);
      users.splice(beforeEnd as number, countOfElements + 1, ...equalUsersScore);
      countOfElements = 0;
      beforeEnd = null;
    }
  }
  return users;
};
export const proccesingUserData = (data:INotFulluser[]):IUser[] => sortUser(
  data.map((user) => ({
    name: user.name,
    score: user.score || 0,
    src: getRandomImg(),
    id: uuidv4(),
    status: {
      places: null,
      isUp: false,
      isNoChange: false,
      isNoData: true,
    },
  })),
);
export const getUserPositionChange = (user:IUser, prevDayUsers:IUser[], positionId:number):IUser => {
  const findIndex = prevDayUsers.findIndex((prevDayUser) => prevDayUser.name === user.name);
  const result = { ...user };
  if (findIndex !== -1) {
    const difference = findIndex - positionId;
    result.status.isNoData = false;
    if (difference > 0) {
      result.status.places = difference;
      result.status.isUp = true;
      result.status.isNoChange = false;
    }
    if (difference < 0) {
      result.status.places = difference * -1;
      result.status.isUp = false;
      result.status.isNoChange = false;
    }
    if (difference === 0) {
      result.status.isNoChange = true;
    }
  } else {
    result.status.isNoData = true;
  }

  return result;
};
export const getPosition = (index:number) => (index < 4 ? `${index}rd` : `${index}th`);

export const mainUsersListProcess = (newUsers:IUser[], previousDayUsers:IUser[] | null) => {
  let result = JSON.parse(JSON.stringify(newUsers)) as IUser[];
  result = sortUser(result);
  if (previousDayUsers) {
    result = result.map((user, index) => getUserPositionChange(user, previousDayUsers, index));
  }
  return result;
};
export const isUserAlreadyExists = (newUserName:string, currentUsers:IUser[]) => currentUsers.map((user) => user.name).includes(newUserName);
