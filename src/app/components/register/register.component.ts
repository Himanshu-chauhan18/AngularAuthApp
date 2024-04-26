import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
  constructor(private auth:AuthService,private router:Router){

  }

  registerUser(userdata:any){
    this.auth.register(userdata).subscribe((response:any)=>{
      if(response.status){
        this.router.navigate(['/login'])
        userdata.name='';
        userdata.email='';
        userdata.password='';
      }else{
        alert(response.message);
      }
    })
  }


}
