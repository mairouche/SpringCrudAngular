import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioEditarComponent } from './usuario-editar.component';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from '../usuario.service';
import { HttpClientModule } from '@angular/common/http';

describe('UsuarioEditarComponent', () => {
  let component: UsuarioEditarComponent;
  let fixture: ComponentFixture<UsuarioEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule,HttpClientModule],
      declarations: [ UsuarioEditarComponent ],
      providers: [UsuarioService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
