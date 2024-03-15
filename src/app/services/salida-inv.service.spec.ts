import { TestBed } from '@angular/core/testing';

import { SalidaInvService } from './salida-inv.service';

describe('SalidaInvService', () => {
  let service: SalidaInvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalidaInvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
