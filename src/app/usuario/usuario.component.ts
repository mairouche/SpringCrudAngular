import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';
import { UsuarioService } from './usuario.service';
import { LoginServiceService } from '../login/login-service.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
  providers: [UsuarioService]
})
export class UsuarioComponent implements OnInit {
 
    
  private usuarios: Usuario[]
  private activo: boolean = false;
  private activoB: boolean = false;
  private usuEma :Usuario;


  constructor(private _usuarioService: UsuarioService,
     private _loginService: LoginServiceService,
     private cookieService: CookieService,
     private router: Router) { }

  ngOnInit() {
    this.getusuarios();
  
  }

  anadir(event){
    if(this.activo== false)
      this.activo= true;
    else{
      this.activo = false
    }  

  }

  buscar(event){
    if(this.activoB== false)
      this.activoB= true;
    else{
      this.activoB = false
      this.usuEma = null
    }  
    
  }


  getusuarios(){
    this._usuarioService.getUsuarios<Usuario[]>()
    .subscribe((data: Usuario[]) => this.usuarios = data,
      error => () => {
        console.log("Error");
      },
      ()=>{
        console.log("Exito");
      }
    );
  }

  buscarEmail(usuario:Usuario){
    this._usuarioService.getUserByEmail<Usuario>(usuario)
    .subscribe((data:Usuario) => this.usuEma = data,
      error => () => {
        console.log("Error");
      },
      ()=> {
        console.log("Exito");
      },
     
    );
    

  }

  
  crear(usuario:Usuario){
    let user:Usuario = new Usuario(null,
      usuario.nombre,
      usuario.apellido,
      usuario.telefono,
      usuario.email,
      usuario.puestotrabajo,
      usuario.aniosempresa
    );
   
    this._usuarioService.create(user).subscribe(res =>
    {
      this.usuarios.push(user);
      this.getusuarios();
      
    });
    
  }
  


  borrar(usuario:Usuario) {
    this._usuarioService.deleteUserById(usuario.id)
    .subscribe( res => {
      console.log('Ok');
     
    }
    ); 
    
    const i = this.usuarios.indexOf(usuario);

    this.usuarios.splice(i, 1);
  }


  editar(usuarios:any){
    const i= this.usuarios.indexOf(usuarios.original)
    this.usuarios[i] = usuarios.editado;
    this._usuarioService.updateUser(this.usuarios[i]).subscribe(
      res=> {
        this.getusuarios();
      }
    );

   

  }

  logOut(evento){
    this.cookieService.delete('login')
    this.router.navigate(['/'])
  }

  

}
