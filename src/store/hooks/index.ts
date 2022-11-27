import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reducer } from '..';
import * as userActions from '../users/actions';

export type RootState = ReturnType<typeof reducer>;
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector;
export const useUsersActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(userActions, dispatch);
};
