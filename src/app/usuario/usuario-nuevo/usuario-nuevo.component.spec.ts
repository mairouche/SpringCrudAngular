import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioNuevoComponent } from './usuario-nuevo.component';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from '../usuario.service';
import { HttpClientModule } from '@angular/common/http';

describe('UsuarioNuevoComponent', () => {
  let component: UsuarioNuevoComponent;
  let fixture: ComponentFixture<UsuarioNuevoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule,HttpClientModule],
      declarations: [ UsuarioNuevoComponent ],
      providers: [UsuarioService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
