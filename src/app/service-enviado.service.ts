import { Injectable } from '@angular/core';

@Injectable()
export class ServiceEnviadoService {

  constructor() {
   }

  private data:any = undefined;
  isUserLoggedIn = false;

  setData(data:any){
    this.data=data;
   }

  getData():any{
    return this.data;
  }


}
