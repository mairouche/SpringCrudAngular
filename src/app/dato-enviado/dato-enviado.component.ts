import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario/usuario';
import { UsuarioService } from '../usuario/usuario.service';
import { ServiceEnviadoService } from '../service-enviado.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dato-enviado',
  templateUrl: './dato-enviado.component.html',
  styleUrls: ['./dato-enviado.component.css']
})
export class DatoEnviadoComponent implements OnInit {

  Usuario:Usuario
  constructor(private router:Router,
    private service:ServiceEnviadoService,
  ) { }

  ngOnInit() {
   this.Usuario=this.service.getData()
    }

  volver(evento){
    this.router.navigate(["/contactos"]);
  }

}
