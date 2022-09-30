import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses/courses.component';
import { SharedModule } from '../../shared/shared.module';
import { CourseCardComponent } from './course-card/course-card.component';
import { CourseListComponent } from './course-list/course-list.component';
import { LoginModule } from '../login/login.module';



@NgModule({
  declarations: [
    CoursesComponent,
    CourseCardComponent,
    CourseListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LoginModule
  ],
  exports: [CoursesComponent]
})
export class CoursesModule { }
