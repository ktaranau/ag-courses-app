import { createFeatureSelector, createSelector } from "@ngrx/store";
import { authorFeatureName, authorsFeatureKey, AuthorsState } from "./authors.reducer";

export const getAuthorFeatureState = createFeatureSelector<AuthorsState>(authorFeatureName);

export const getAddedAuthors = createSelector(
    getAuthorFeatureState,
    (state: AuthorsState) => state.addedAuthor
);

export const getAuthors = createSelector(
    getAuthorFeatureState,
    (state: AuthorsState) => state.authors
);
