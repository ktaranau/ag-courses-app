import { createAction, props } from "@ngrx/store";

export const requestLogin = createAction(
  '[Auth API] Request Login',
  props<{ email: string, password: string }>()
);

export const requestLoginSuccess = createAction(
  '[Auth API] Request Login Success',
  props<{ token: string }>()
);

export const requestLoginFail = createAction(
  '[Auth API] Request Login Fail',
  props<{ error: string }>()
);

export const requestRegister = createAction(
  '[Auth API] Request Register',
  props<{ name: string, email: string, password: string }>()
)

export const requestRegisterSuccess = createAction(
  '[Auth API] Request Register Success',
  props<{ result: string }>()
)

export const requestRegisterFail = createAction(
  '[Auth API] Request Register Fail',
  props<{ error: string }>()
)

export const requestLogout = createAction(
  '[Auth API] Request Logout',
)

export const requestLogoutSuccess = createAction(
  '[Auth API] Request Logout Success',
)