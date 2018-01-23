import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Usuario } from '../usuario';



@Component({
  selector: 'usuario-editar',
  templateUrl: './usuario-editar.component.html',
  styleUrls: ['./usuario-editar.component.css']
})
export class UsuarioEditarComponent implements OnInit {

  @Input() usuario:Usuario;
  @Output() usuarioEditadoEvento = new EventEmitter;
  usuarioEditar: Usuario = new Usuario();

  constructor() { }

  ngOnInit() {
    Object.assign(this.usuarioEditar,this.usuario);
    
  }

  editar(){
    this.usuarioEditar.editable=false;
    this.usuarioEditadoEvento.emit({original: this.usuario,editado:this.usuarioEditar})
  }

}
