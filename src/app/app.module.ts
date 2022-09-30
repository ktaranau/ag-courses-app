import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoursesModule } from './features/courses/courses.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CourseComponent } from './features/course/course.component';
import { LoginModule } from './features/login/login.module';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
  ],
  imports: [
    BrowserModule,
    CoursesModule,
    LoginModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
