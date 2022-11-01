import { state } from "@angular/animations";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { State } from "src/app/store";
import { authFeatureName, AuthState } from "./auth.reducer";

export const getAuthFeatureState = createFeatureSelector<AuthState>(authFeatureName);

export const getToken = createSelector(
    getAuthFeatureState,
    (state: AuthState) => state.token
);

export const getSpecificErrorMessage = createSelector(
    getAuthFeatureState,
    (state: AuthState) => state.errorMessage
);

export const isUserAuthorized = createSelector(
    getAuthFeatureState,
    (state: AuthState) => state.isAuthorised
)