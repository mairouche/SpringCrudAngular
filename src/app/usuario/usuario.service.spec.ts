import { TestBed, inject } from '@angular/core/testing';

import { UsuarioService } from './usuario.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('UsuarioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule,HttpClientModule,],
      providers: [UsuarioService]
    });
  });

  it('should be created', inject([UsuarioService], (service: UsuarioService) => {
    expect(service).toBeTruthy();
  }));
});
