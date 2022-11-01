import { Action, createReducer, on } from "@ngrx/store";
import * as authActions from './auth.actions';

export const authFeatureName = 'auth';

export const authFeatureKey = {
    storeFeatureName: "auth"
};

export interface AuthState {
    isAuthorised: boolean;
    token: string;
    errorMessage: string
}

export const initialAuthState: AuthState = {
    isAuthorised: false,
    token: '',
    errorMessage: ''
};

console.log(authActions)

export const reducer = createReducer(
    initialAuthState,
    on(authActions.requestLogin, (authState, { }) => {
        console.log("authState", authState)
        return {
            ...authState,
        };
    }),
    on(authActions.requestLoginSuccess, (authState, { token }) => {
        console.log("authStateSucc", authState, token)
        return {
            ...authState,
            isAuthorised: true,
            token: token,
            errorMessage: ''
        }
    }),
    on(authActions.requestLoginFail, (authState, { error }) => {
        console.log("authStateFail", authState, error)
        return {
            ...authState,
            isAuthorised: false,
            errorMessage: error
        }
    }),
    on(authActions.requestRegister, (authState, { }) => {
        return {
            ...authState
        }
    }),
    on(authActions.requestRegisterSuccess, (authState, { }) => {
        return {
            ...authState
        }
    }),
    on(authActions.requestRegisterFail, (authState, { error }) => {
        return {
            ...authState,
            errorMessage: error
        }
    }),
    on(authActions.requestLogout, (authState, { }) => {
        return {
            ...authState
        }
    }),
    on(authActions.requestLogoutSuccess, (authState, { }) => {
        return {
            ...authState
        }
    }),
);

export const authReducer = (state: AuthState, action: Action): AuthState => reducer(state, action);