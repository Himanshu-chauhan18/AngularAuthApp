import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-freecourses',
  templateUrl: './freecourses.component.html',
  styleUrls: ['./freecourses.component.css']
})
export class FreecoursesComponent {
  courses:any=[];
  constructor(private auth:AuthService){
 
  }
  
  ngOnInit(){
   this.getCourses()
  }
 
  getCourses(){
     this.auth.getFreeCourses().subscribe((response:any)=>{
       if(response.status){
         this.courses = response.data;
       }else{
         alert(response.message);
       }
     })    
  }
}
