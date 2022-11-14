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
export const proccesingUserData = (data:INotFulluser[]):IUser[] => data.map((user) => ({
  name: user.name,
  score: user.score || 0,
  src: getRandomImg(),
  id: uuidv4(),
}));

export const sortUser = (data:IUser[]) => data.sort((a, b) => b.score - a.score);
export const getPosition = (index:number) => (index < 4 ? `${index}rd` : `${index}th`);
