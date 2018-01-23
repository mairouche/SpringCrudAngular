import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioBuscarComponent } from './usuario-buscar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Usuario } from '../usuario';

describe('UsuarioBuscarComponent', () => {
  let component: UsuarioBuscarComponent;
  let fixture: ComponentFixture<UsuarioBuscarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule,HttpClientModule],
      declarations: [ UsuarioBuscarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioBuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
