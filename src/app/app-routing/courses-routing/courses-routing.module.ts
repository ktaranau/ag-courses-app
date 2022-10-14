import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CourseFormComponent } from 'src/app/features/courses/course-form/course-form.component';
import { CourseCardComponent } from 'src/app/features/courses/course-card/course-card.component';
import { CoursesComponent } from 'src/app/features/courses/courses/courses.component';
import { NotAuthorizedGuard } from 'src/app/auth/guards/not-authorized.guard';

const routes: Routes = [
  {path : '', component : CoursesComponent, },
  { path: 'add', component: CourseFormComponent },
  { path: 'edit/:id', component: CourseCardComponent },
  { path: ':id', component: CourseCardComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
