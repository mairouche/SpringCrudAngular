import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Usuario } from '../usuario';

@Component({
  selector: 'usuario-buscar',
  templateUrl: './usuario-buscar.component.html',
  styleUrls: ['./usuario-buscar.component.css']
})
export class UsuarioBuscarComponent implements OnInit {

  constructor() { }

  @Output() usuarioBuscarEvento = new EventEmitter;

  @Input() usuEma;
  usuarioBuscar: Usuario = new Usuario();
  usuario:any={};
  ngOnInit() {
    
  }


  buscar(event){
    
    this.usuario= this.usuarioBuscarEvento.emit(this.usuarioBuscar);
   
    }
}
