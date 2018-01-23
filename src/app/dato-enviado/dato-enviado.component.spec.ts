import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatoEnviadoComponent } from './dato-enviado.component';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ServiceEnviadoService } from '../service-enviado.service';
import { UsuarioService } from '../usuario/usuario.service';
describe('DatoEnviadoComponent', () => {
  let component: DatoEnviadoComponent;
  let fixture: ComponentFixture<DatoEnviadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatoEnviadoComponent ],
      imports: [
        RouterTestingModule],
      providers:[ServiceEnviadoService,UsuarioService]  
   
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatoEnviadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
