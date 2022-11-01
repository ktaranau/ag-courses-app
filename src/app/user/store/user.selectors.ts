import { createFeatureSelector, createSelector } from "@ngrx/store";
import { authFeatureName, userFeatureKey, UserState } from "./user.reducer";

export const getUserFeatureState = createFeatureSelector<UserState>(authFeatureName);

export const getName = createSelector(
    getUserFeatureState,
    (state: UserState) => state.name
);

export const isAdmin = createSelector(
    getUserFeatureState,
    (state: UserState) => state.isAdmin
);

