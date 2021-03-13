import {
    ActionReducer,
    ActionReducerMap,
    createFeatureSelector,
    createSelector,
    MetaReducer
  } from '@ngrx/store';
  import { environment } from '../../environments/environment';
  import { UserLoginState, userLoginReducer } from './reducers/user.reducers';
  
  export interface State {
    users: UserLoginState
  }
  
  export const reducers: ActionReducerMap<State> = {
    users: userLoginReducer
  };
  
  
  export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
  