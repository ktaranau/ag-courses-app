import { Action, createReducer, on } from "@ngrx/store";
import { Author } from "src/app/services/interfaces/author";
import * as authorActions from './authors.actions';

export const authorFeatureName = 'authors';

export const authorsFeatureKey = {
    storeFeatureName: "authors"
};

export interface AuthorsState {
    authors: Author[],
    addedAuthor: Author,
    message: string
}

export const initialAuthorsState: AuthorsState = {
    authors: [] as Author[],
    addedAuthor: {} as Author,
    message: ""
};

export const reducer = createReducer(
    initialAuthorsState,
    on(authorActions.requestAuthors, (authorsState, { }) => {
        return {
            ...authorsState,
        };
    }),
    on(authorActions.requestAuthorsSuccess, (authorsState, { authors }) => {
        return {
            ...authorsState,
            authors: authors,
        }
    }),
    on(authorActions.requestAuthorsFail, (authorsState, { }) => {
        return {
            ...authorsState,
        }
    }),
    on(authorActions.requestAddAuthor, (authorsState, { }) => {
        return {
            ...authorsState
        }
    }),
    on(authorActions.requestAddAuthorSuccess, (authorsState, { author }) => {
        return {
            ...authorsState,
            authors: [
                ...authorsState.authors,
                author
            ],
            addedAuthor: author
        }
    }),
    on(authorActions.requestAddAuthorFail, (authorsState, { error }) => {
        return {
            ...authorsState,
            errorMessage: error
        }
    }),
    on(authorActions.resetAddedAuthor, (authorsState, { }) => {
        return {
            ...authorsState,
            addedAuthor: { "id": "", "name": "" }
        }
    })
);

export const authorsReducer = (state: AuthorsState, action: Action): AuthorsState => reducer(state, action);