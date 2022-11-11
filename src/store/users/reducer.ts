import { IState, IUserActions } from './common';

const initialState:IState = {
  currentUsers: [],
};

export const userReducer = (state = initialState, action:IUserActions):IState => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};
