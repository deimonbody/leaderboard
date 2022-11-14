import { IState, IUserActions, UserActions } from './common';

const initialState:IState = {
  currentUsers: [],
  isLoading: true,
};

export const userReducer = (state = initialState, action:IUserActions):IState => {
  switch (action.type) {
    case UserActions.SET_USERS: {
      return {
        ...state,
        currentUsers: action.payload,
        isLoading: false,
      };
    }
    case UserActions.UPDATE_USER_BY_ID: {
      const { userName, score } = action.payload.data;
      const currentUsersCopy = [...state.currentUsers];
      const findIndex = currentUsersCopy.findIndex((user) => user.id === action.payload.userId);
      currentUsersCopy[findIndex].name = userName;
      currentUsersCopy[findIndex].score = score;
      return {
        ...state,
        currentUsers: currentUsersCopy,
      };
    }
    default: {
      return state;
    }
  }
};
