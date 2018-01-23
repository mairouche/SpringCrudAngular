import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Usuario } from '../usuario';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { UsuarioService } from '../usuario.service';


@Component({
  selector: 'usuario-nuevo',
  templateUrl: './usuario-nuevo.component.html',
  styleUrls: ['./usuario-nuevo.component.css']
})
export class UsuarioNuevoComponent implements OnInit {

  nuevoUsuario = new Usuario();

  private sub: any;
  @Output() crearNuevoUsuarioEvento = new EventEmitter();

  userForm: FormGroup;
  
  constructor( private userService: UsuarioService) { }

  ngOnInit() { 
    
  }

  crear(){
  
  this.crearNuevoUsuarioEvento.emit(this.nuevoUsuario);
  this.nuevoUsuario = new Usuario();
 
    
   
   
  }

}
