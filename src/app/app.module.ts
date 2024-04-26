import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FreecoursesComponent } from './components/freecourses/freecourses.component';
import { PaidcoursesComponent } from './components/paidcourses/paidcourses.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { LoaderComponent } from './shared/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    FreecoursesComponent,
    PaidcoursesComponent,
    RegisterComponent,
    LoginComponent,
    HeaderComponent,
    PagenotfoundComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
