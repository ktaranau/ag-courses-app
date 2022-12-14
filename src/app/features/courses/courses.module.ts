import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses/courses.component';
import { SharedModule } from '../../shared/shared.module';
import { CourseCardComponent } from './course-card/course-card.component';
import { CourseListComponent } from './course-list/course-list.component';
import { LoginModule } from '../login/login.module';
import { CourseFormComponent } from './course-form/course-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CoursesRoutingModule } from 'src/app/app-routing/courses-routing/courses-routing.module';



@NgModule({
  declarations: [
    CoursesComponent,
    CourseCardComponent,
    CourseListComponent,
    CourseFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LoginModule,
    ReactiveFormsModule,
    CoursesRoutingModule
  ],
  exports: [CoursesComponent, CourseFormComponent]
})
export class CoursesModule { }
