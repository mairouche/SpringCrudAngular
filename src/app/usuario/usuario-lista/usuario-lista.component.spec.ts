import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioListaComponent } from './usuario-lista.component';
import { FormsModule } from '@angular/forms';
import { UsuarioEditarComponent } from '../usuario-editar/usuario-editar.component';
import { UsuarioService } from '../usuario.service';
import { HttpClientModule } from '@angular/common/http';

describe('UsuarioListaComponent', () => {
  let component: UsuarioListaComponent;
  let fixture: ComponentFixture<UsuarioListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule,HttpClientModule],
      declarations: [ UsuarioListaComponent,
        UsuarioEditarComponent ],
        providers: [UsuarioService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
