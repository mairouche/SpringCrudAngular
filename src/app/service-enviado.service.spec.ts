import { TestBed, inject } from '@angular/core/testing';

import { ServiceEnviadoService } from './service-enviado.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('ServiceEnviadoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule,HttpClientModule,],
      providers: [ServiceEnviadoService]
    });
  });

  it('should be created', inject([ServiceEnviadoService], (service: ServiceEnviadoService) => {
    expect(service).toBeTruthy();
  }));
});
