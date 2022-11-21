import { createAction, props } from "@ngrx/store";
import { Author } from "src/app/services/interfaces/author";


export const requestAuthors = createAction(
    '[Authors API] Request Authors',    
  );
  
  export const requestAuthorsSuccess = createAction(
    '[Authors API] Request Authors Success',
    props<{ authors: Author[] }>()
  );
  
  export const requestAuthorsFail = createAction(
    '[Authors API] Request Authors Fail',
  );

  export const requestAddAuthor = createAction(
    '[Authors API] Request Add Authors',
    props<{  name: string }>()
  );
  
  export const requestAddAuthorSuccess = createAction(
    '[Authors API] Request Add Authors Success',
    props<{ author: Author }>()
  );
  
  export const requestAddAuthorFail = createAction(
    '[Authors API] Request Add Authors Fail',
    props<{ error: string }>()
  );

  export const resetAddedAuthor = createAction(
    '[Authors API] Request Added Authors',
  )
