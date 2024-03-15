import { TestBed } from '@angular/core/testing';

import { EntradaInvService } from './entrada-inv.service';

describe('EntradaInvService', () => {
  let service: EntradaInvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntradaInvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
