import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses/courses.component';
import { SharedModule } from '../shared/shared.module';
import { CourseCardComponent } from './course-card/course-card.component';
import { CourseListComponent } from './course-list/course-list.component';



@NgModule({
  declarations: [
    CoursesComponent,
    CourseCardComponent,
    CourseListComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [CoursesComponent]
})
export class CoursesModule { }
