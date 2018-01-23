import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LoginServiceService {

  private apiUrl = 'http://localhost:8080/login';

  constructor(private _http :HttpClient) { }

  getLogin<LoginUser>(LoginUser:LoginUser){
    console.log("Loginnnn")
    return this._http.post(this.apiUrl,LoginUser)
    .catch((error:any) => Observable.throw(error.json().error || 'Error'));
  }


  private data:any = undefined;
  isUserLogin = false;

  setData(data:any){
    this.data=data;
   }

  getData():any{
    return this.data;
  }


}
