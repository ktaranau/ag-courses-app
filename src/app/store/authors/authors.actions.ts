import { createAction, props } from "@ngrx/store";
import { Author } from "src/app/services/interfaces/author";


export const requestAuthors = createAction(
    '[Authors API] Request Login',    
  );
  
  export const requestAuthorsSuccess = createAction(
    '[Authors API] Request Login Success',
    props<{ authors: Author[] }>()
  );
  
  export const requestAuthorsFail = createAction(
    '[Authors API] Request Login Fail',
  );

  export const requestAddAuthor = createAction(
    '[Authors API] Request Login',
    props<{  name: string }>()
  );
  
  export const requestAddAuthorSuccess = createAction(
    '[Authors API] Request Login Success',
    props<{ author: Author }>()
  );
  
  export const requestAddAuthorFail = createAction(
    '[Authors API] Request Login Fail',
    props<{ error: string }>()
  );

  export const resetAddedAuthor = createAction(
    '[Authors API] Request Login Fail',
    props<{ error: string }>()
  )
