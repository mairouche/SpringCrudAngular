import { async, ComponentFixture, TestBed } from '@angular/core/testing';


import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { UsuarioComponent } from './usuario.component';
import { UsuarioNuevoComponent } from './usuario-nuevo/usuario-nuevo.component';
import { UsuarioListaComponent } from './usuario-lista/usuario-lista.component';
import { UsuarioEditarComponent } from './usuario-editar/usuario-editar.component';
import { UsuarioService } from './usuario.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioBuscarComponent } from './usuario-buscar/usuario-buscar.component';


describe('UsuarioComponent', () => {
  let component: UsuarioComponent;
  let fixture: ComponentFixture<UsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule,HttpClientModule,],
      declarations: [ UsuarioComponent,
        UsuarioNuevoComponent,
        UsuarioListaComponent,
        UsuarioEditarComponent,
        UsuarioBuscarComponent ],
        providers: [UsuarioService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
