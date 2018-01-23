import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';
import { ServiceEnviadoService } from '../../service-enviado.service';


@Component({
  selector: 'usuario-lista',
  templateUrl: './usuario-lista.component.html',
  styleUrls: ['./usuario-lista.component.css']
})
export class UsuarioListaComponent implements OnInit {
  @Input() usuarios;

  @Output() borrarUsuarioEvento = new EventEmitter();
  @Output() editarUsuarioEvento = new EventEmitter();
 
  usuario:any={};
  
  constructor(private router:Router,private UsuarioService:UsuarioService,private service:ServiceEnviadoService) { }

  ngOnInit() {
  }

  borrar(usuario: Usuario){
    this.borrarUsuarioEvento.emit(usuario);
  }



  editar(usuarios){
    
    this.editarUsuarioEvento.emit(usuarios);
  }

  enviar(event,usuario: Usuario){
    this.service.isUserLoggedIn = true;
    this.service.setData(usuario)
    this.router.navigate(['/enviar']);
  }

}
