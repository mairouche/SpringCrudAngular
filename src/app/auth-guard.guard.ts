import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ServiceEnviadoService } from './service-enviado.service';

import { Router } from '@angular/router';

@Injectable()
export class AuthGuardGuard implements CanActivate {
  constructor(private service:ServiceEnviadoService,private router:Router){
    
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      
      if(!this.service.isUserLoggedIn){
        this.router.navigate(['/contactos'])
      }
    return this.service.isUserLoggedIn;

    
  }
  
}
