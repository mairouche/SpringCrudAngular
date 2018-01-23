import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';

@Injectable()
export class UsuarioService {

  private apiUrl = 'http://localhost:8080/contacto';

  constructor(private _http :HttpClient) { }

  create(user: Usuario): Observable<Usuario> {
    return  this._http.post(this.apiUrl, user)
   .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  destroy(usuario:Usuario){
    return this._http.delete<Usuario>(this.apiUrl+usuario.id)
  }

  update(usuario:Usuario){
    
  return this._http.put(this.apiUrl+usuario.id,usuario)
    .map(data => data).toPromise()
  }

  getUsuarios<Usuario>(): Observable<Usuario> {
     return this._http.get<Usuario>(this.apiUrl);
  }

  getTrabajadores<Usuario>(): Observable<Usuario>{
    return this._http.get<Usuario>(this.apiUrl+"/estadisticas/numeroPuestos");
  }

  getMedia<Usuario>(): Observable<Usuario>{
    return this._http.get<Usuario>(this.apiUrl+"/estadisticas/edadMediaPuestos");
  }
  
  getUsuario(usuario:Usuario){
    return this._http.get(this.apiUrl+usuario.id)
    .map(data => data).toPromise()
  }

  getUserByEmail<Usuario>(usuario:Usuario){
    return this._http.post(this.apiUrl+'/email',usuario)
    .catch((error:any) => Observable.throw(error.json().error || 'Error'));
  }

  findById(id: number): Observable<Usuario> {
    return this._http.get(this.apiUrl + '/' + id)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Error'));
  }

  deleteUserById(id: number): Observable<boolean> {
    return this._http.delete(this.apiUrl + '/' + id)
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  updateUser(user: Usuario): Observable<Usuario> {
    return this._http.put(this.apiUrl +  '/' + user.id,user)
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

 


}
