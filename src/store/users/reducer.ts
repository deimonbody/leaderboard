import dayjs from 'dayjs';
import {
  IState, IUserActions, UserActions,
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
    case UserActions.UPDATE_USERS: {
      const daysCopy = JSON.parse(JSON.stringify(state.days));
      daysCopy[state.currentDay].users = action.payload;
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
    default: {
      return state;
    }
  }
};
