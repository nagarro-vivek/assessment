import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { loginUser, loginUserSuccess } from '../actions/user.action';
// import { UserService } from 'src/app/services/user.service';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions) { }

//   loadUsers = createEffect(() => this.actions$.pipe(
//     ofType(loadUsers),
//     switchMap(action => this.userService.getUsers()),
//     map((articles) => loadUsersSuccess({ data:articles }))
//   ))
 
}
