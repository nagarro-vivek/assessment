import { createReducer, on, State } from '@ngrx/store'
import { loginUser, loginUserSuccess, loginUserFailure } from '../actions/user.action';

export interface UserLoginState {
    isAuthenticated : Boolean
}

export const initialState: UserLoginState = {
    isAuthenticated: false
}

export const userLoginReducer = createReducer(initialState,
    on(loginUser, (state) => ({
        ...state
    })),

    on(loginUserSuccess, (state, action) => ({
        ...state,
        isAuthenticated: true
    })),

    on(loginUserFailure, (state, action) => ({
        ...state,
        isAuthenticated: false
    }))
);