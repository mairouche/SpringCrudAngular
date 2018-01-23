import { Component, OnInit } from '@angular/core';
import { LoginUser } from '../login-user';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { LoginServiceService } from './login-service.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUsuario = new LoginUser();
  userLog:LoginUser;
  error:boolean= false;



  constructor(
    private _loginService:LoginServiceService,
    private router:Router,
    private cookieService: CookieService
  ) { }

  ngOnInit() {
    if(this.cookieService.get('login') !=""){
      this.router.navigate(['/contactos']);
    }
    
}

  loginUser(event){
    console.log("loginUser")
    
    this._loginService.getLogin<LoginUser>(this.loginUsuario)
    .subscribe((data:LoginUser) => this.userLog = data,
      error => () => {
        console.log("Error");
      },
      ()=> {
        
        
        if(this.userLog == null){
         
          this.error= true;
        }else{
          
          this.cookieService.set( 'login', this.userLog.nickname,1);
          this._loginService.isUserLogin = true;
          this._loginService.setData(this.userLog)
          this.router.navigate(['/contactos']);
        }
      },
     
    );
  }


  

}
