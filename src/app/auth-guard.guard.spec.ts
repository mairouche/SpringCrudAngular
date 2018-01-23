import { TestBed, async, inject } from '@angular/core/testing';
import { ServiceEnviadoService } from './service-enviado.service';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthGuardGuard } from './auth-guard.guard';
import { Router } from '@angular/router';

describe('AuthGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuardGuard,ServiceEnviadoService],
      imports:[RouterTestingModule]
    });
  });

  it('should ...', inject([AuthGuardGuard], (guard: AuthGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
