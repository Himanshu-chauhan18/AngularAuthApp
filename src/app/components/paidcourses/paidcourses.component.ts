import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-paidcourses',
  templateUrl: './paidcourses.component.html',
  styleUrls: ['./paidcourses.component.css']
})
export class PaidcoursesComponent {
 courses:any=[];
 isLoading:boolean = false;
 constructor(private auth:AuthService,private router:Router){

 }
 
 ngOnInit(){
  this.getCourses()
 }

 getCourses(){
    this.isLoading = true;
    this.auth.getPaidCourses().subscribe((response:any)=>{
      if(response.status){
        this.courses = response.data;
      }else{
        if(response.reqStatus==401){
          this.router.navigate(['/login']);
        }
      }
      this.isLoading = false;
    })    
 }
}
