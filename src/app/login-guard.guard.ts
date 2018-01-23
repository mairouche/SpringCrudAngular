import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LoginServiceService } from './login/login-service.service';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class LoginGuardGuard implements CanActivate {
  constructor(private _login:LoginServiceService,private router:Router,private cookieService: CookieService){}


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(!this._login.isUserLogin){
        
        if(this.cookieService.get('login') !=""){
          this._login.isUserLogin = true
        }else{
          this.router.navigate(['/'])
        }
          
      }
    return this._login.isUserLogin;

    
  }
}
