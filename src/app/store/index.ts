import { Course } from "../features/courses/interfaces/course";
import { ActionReducerMap} from '@ngrx/store'
import { reducer as authReducer } from "../auth/store/auth.reducer"
import { reducer as userReducer } from "../user/store/user.reducer"
import { reducer as authorsReducer } from "../store/authors/authors.reducer"
import { reducer as coursesReducer } from "./courses/courses.reducer";

import { AuthEffects } from "../auth/store/auth.effects";
import { UserEffects } from "../user/store/user.effects";
import { AuthorsEffects } from "../store/authors/authors.effects";
import { CoursesEffects } from "./courses/courses.effects";

export interface State {}

export const effects: any[] = [
    AuthEffects,
    UserEffects,
    AuthorsEffects,
    CoursesEffects
]

export const reducers: ActionReducerMap<State> = {
    auth: authReducer,
    user: userReducer,
    author: authorsReducer,
    courses: coursesReducer
  };
