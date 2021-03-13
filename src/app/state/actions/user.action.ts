import { createAction, props } from '@ngrx/store';

export const loginUser = createAction(
    '[User] Login Users'
);

export const loginUserSuccess = createAction(
    '[User] Login User Success',
    props<{ data: any }>()
);

export const loginUserFailure = createAction(
    '[User] Login User Failure',
    props<{ error: any }>()
);