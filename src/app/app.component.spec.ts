import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioNuevoComponent } from './usuario/usuario-nuevo/usuario-nuevo.component';
import { UsuarioListaComponent } from './usuario/usuario-lista/usuario-lista.component';
import { UsuarioEditarComponent } from './usuario/usuario-editar/usuario-editar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioService } from './usuario/usuario.service';
import { NavbarComponent} from './navbar/navbar.component';
import {UsuarioBuscarComponent} from './usuario/usuario-buscar/usuario-buscar.component';

import {ServiceEnviadoService} from './service-enviado.service'
import {RouterTestingModule} from "@angular/router/testing";
import {AuthGuardGuard} from'./auth-guard.guard'
import {Router} from "@angular/router";

import { LoginComponent } from './login/login.component';
import { LoginServiceService } from './login/login-service.service';
import { LoginGuardGuard } from './login-guard.guard';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule,HttpClientModule,
        RouterTestingModule],
      declarations: [
        AppComponent,
        UsuarioComponent,
        UsuarioNuevoComponent,
        UsuarioListaComponent,
        UsuarioEditarComponent,
        UsuarioBuscarComponent,
        NavbarComponent,
        LoginComponent
      ],
      providers: [UsuarioService,
        ServiceEnviadoService,
        AuthGuardGuard,
        LoginServiceService,
        LoginGuardGuard]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
});