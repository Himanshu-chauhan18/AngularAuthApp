import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FreecoursesComponent } from './components/freecourses/freecourses.component';
import { PaidcoursesComponent } from './components/paidcourses/paidcourses.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path:'',
    component:FreecoursesComponent,
    pathMatch:'full'
  },
  {
    path:'freecourses',
    component:FreecoursesComponent,
  },
  {
    path:'paidcourses',
    component:PaidcoursesComponent,
  },
  {
    path:'register',
    component:RegisterComponent,
  },
  {
    path:'login',
    component:LoginComponent,
  },
  {
    path:'**',
    component:PagenotfoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
