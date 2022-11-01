import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CourseComponent } from './features/course/course.component';
import { LoginModule } from './features/login/login.module';
import { RegistrationModule } from './features/registration/registration.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { authInterceptorProviders } from './auth/interceptors/token.interceptor';
import {NgxsModule} from '@ngxs/store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { effects, reducers } from './store';
import { AuthStateFacade } from './auth/store/auth.facade';
import { UserFacade } from './user/store/user.facade';
import { AuthorsStateFacade } from './store/authors/authors.facade';
import { CoursesStateFacade } from './store/courses/courses.facade';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule,
    LoginModule,
    RegistrationModule,
    FontAwesomeModule,
    SharedModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot(effects),
  ],
  providers: [authInterceptorProviders, AuthStateFacade, UserFacade, AuthorsStateFacade, CoursesStateFacade],
  bootstrap: [AppComponent]
})
export class AppModule { }
