import dayjs from 'dayjs';
import {
  IDay, IState, IUserActions, UserActions,
} from './common';

const initialState:IState = {
  days: [],
  currentDay: 0,
  isLoading: true,
};

export const userReducer = (state = initialState, action:IUserActions):IState => {
  switch (action.type) {
    case UserActions.SET_USERS: {
      const newDays = [...state.days, {
        dayTime: dayjs().toString(),
        users: action.payload,
      }];
      return {
        ...state,
        days: newDays,
        isLoading: false,
      };
    }
    case UserActions.UPDATE_USER_BY_ID: {
      const { userName, score } = action.payload.data;
      const daysCopy = JSON.parse(JSON.stringify(state.days));
      for (let i = 0; i < daysCopy.length; i += 1) {
        let isFinished = false;
        for (let j = 0; j < daysCopy[i].users.length; j += 1) {
          if (daysCopy[i].users[j].id === action.payload.userId) {
            daysCopy[i].users[j].name = userName;
            daysCopy[i].users[j].score = score;
            isFinished = true;
            break;
          }
        }
        if (isFinished) break;
      }
      return {
        ...state,
        days: daysCopy,
      };
    }
    case UserActions.ADD_NEW_DAY: {
      const { dayTime, users } = action.payload;
      const newDaysData = [...state.days, { dayTime, users }];
      return {
        ...state,
        isLoading: false,
        days: newDaysData,
        currentDay: state.currentDay + 1,
      };
    }
    case UserActions.SET_LOADER: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case UserActions.DAY_CHANGE: {
      return {
        ...state,
        currentDay: action.payload,
      };
    }
    case UserActions.ADD_NEW_USER: {
      const daysCopy = JSON.parse(JSON.stringify(state.days)) as IDay[];
      daysCopy[state.currentDay].users.push(action.payload);
      return {
        ...state,
        days: daysCopy,
      };
    }
    default: {
      return state;
    }
  }
};
