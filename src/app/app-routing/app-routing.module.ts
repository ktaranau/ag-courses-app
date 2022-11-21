import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../features/login/login/login.component';
import { RegistrationComponent } from '../features/registration/registration/registration.component';
import { NotAuthorizedGuard } from '../auth/guards/not-authorized.guard';

const routes: Routes = [
  {path : 'courses', loadChildren: () => import('../features/courses/courses.module').then(m => m.CoursesModule), },
  {path : 'login', component : LoginComponent, },
  {path : 'registration', component : RegistrationComponent, },

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
