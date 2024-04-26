import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { delay } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient,private router:Router) { }

  register(userdata:any) {
    return this.http.post(environment.BACKEND_URL+'register',userdata)
  }

  login(userdata:any) {
    return this.http.post(environment.BACKEND_URL+'login',userdata)
  }

  getFreeCourses(){
    return this.http.get(environment.BACKEND_URL+'getFreeCourses')
  }

  getPaidCourses(){
    return this.http.get(environment.BACKEND_URL+'getPaidCourses').pipe(delay(5000))
  }

  isLoggedIn(){
    return !!localStorage.getItem('token');
  }

  getAccessToken(){
    return localStorage.getItem('token');
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/freecourses'])
  }

}
