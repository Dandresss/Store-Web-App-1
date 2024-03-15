import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradasInvComponent } from './entradas-inv.component';

describe('EntradasInvComponent', () => {
  let component: EntradasInvComponent;
  let fixture: ComponentFixture<EntradasInvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EntradasInvComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EntradasInvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
