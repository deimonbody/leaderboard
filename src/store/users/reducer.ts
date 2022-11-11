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
    default: {
      return state;
    }
  }
};
