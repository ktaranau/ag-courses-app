import { Action, createReducer, on } from "@ngrx/store";
import * as userActions from './user.actions';

export const authFeatureName = 'user';

export const userFeatureKey = {
    storeFeatureName: "user"
};

export interface UserState {
    isAdmin: boolean;
    name: string;
}

export const initialUserState: UserState = {
    isAdmin: false,
    name: "",
  };

export const reducer = createReducer(
    initialUserState,

    on(userActions.requestCurrentUser, (userState, { }) => {
        console.log("requestCurrentUser reducer", userState)
        return {
            ...userState,
        };
    }),
    on(userActions.requestCurrentUserSuccess, (userState, { isAdmin, name }) => {
        console.log("requestCurrentUserSuc reducer", userState)
        return {
            ...userState,
            isAdmin,
            name,
        };
    })

);

export const userReducer = (state: UserState, action: Action): UserState => reducer(state, action);