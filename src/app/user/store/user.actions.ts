import { createAction, props } from "@ngrx/store";
import { User } from "src/app/services/interfaces/user";

export const requestCurrentUser = createAction(
    '[User Page] Request User',
  );
  
  export const requestCurrentUserSuccess = createAction(
    '[User API] User Load Success',
    props<{ isAdmin: boolean, name: string }>()
  );
  
  export const requestCurrentUserFail = createAction(
    '[User API] User Load Failure',
    props<{ error: string }>()
  );
  