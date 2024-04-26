import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Input() pageName:string="Login";
  isRegister:boolean=false;
  @Output() register = new EventEmitter();
  saveFormsData:any={};

  constructor(private auth:AuthService,private router:Router){

  }

  ngOnInit() {
    if((this.pageName!='Login')){
      this.isRegister = true;
    }
  }
  
  onSubmitData(){
    if(this.isRegister){
       this.register.emit(this.saveFormsData)
    }else{
      this.auth.login(this.saveFormsData).subscribe((response:any)=>{
        if(response.status){
          alert(response.message);
          localStorage.setItem('token',response.token)
          this.router.navigate(['/freecourses'])
        }else{
          alert(response.message);
        }
      })    
    }
  }
}
