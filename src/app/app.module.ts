import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario/usuario.component';

import { UsuarioListaComponent } from './usuario/usuario-lista/usuario-lista.component';
import { UsuarioNuevoComponent } from './usuario/usuario-nuevo/usuario-nuevo.component';
import { UsuarioService } from './usuario/usuario.service';
import { UsuarioEditarComponent } from './usuario/usuario-editar/usuario-editar.component';
import { HttpClient } from 'selenium-webdriver/http';
import {HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { DatoEnviadoComponent } from './dato-enviado/dato-enviado.component';
import { RouterModule, Routes }    from '@angular/router';
import { ServiceEnviadoService } from './service-enviado.service';
import { AuthGuardGuard } from './auth-guard.guard';
import { UsuarioBuscarComponent } from './usuario/usuario-buscar/usuario-buscar.component';
import { LineChartDemoComponent } from './line-chart-demo/line-chart-demo.component';
import { ChartsModule } from 'ng2-charts';
import { LoginComponent } from './login/login.component';
import { LoginServiceService } from './login/login-service.service';
import { LoginGuardGuard } from './login-guard.guard';
import { CookieService } from 'ngx-cookie-service';
const appRoutes: Routes = [
  
  {
    path:'',
    component: LoginComponent
  },

  {
    path:'contactos',
    canActivate:[LoginGuardGuard],
    component: UsuarioComponent
  },
  
  { 
    path: 'enviar', 
    canActivate: [AuthGuardGuard],
    component: DatoEnviadoComponent 
  },
  { 
    path: 'graficos', 
    
    component: LineChartDemoComponent 
  }

  
];

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    UsuarioListaComponent,
    UsuarioNuevoComponent,
    UsuarioEditarComponent,
    NavbarComponent,
    DatoEnviadoComponent,
    UsuarioBuscarComponent,
    LineChartDemoComponent,
    LoginComponent,
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ChartsModule
  ],
  providers: [UsuarioService
    ,AuthGuardGuard
    ,ServiceEnviadoService
    ,LoginServiceService
    ,LoginGuardGuard
    ,CookieService 
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
  
})
export class AppModule { }
