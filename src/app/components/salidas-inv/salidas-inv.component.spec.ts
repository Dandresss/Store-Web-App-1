import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalidasInvComponent } from './salidas-inv.component';

describe('SalidasInvComponent', () => {
  let component: SalidasInvComponent;
  let fixture: ComponentFixture<SalidasInvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SalidasInvComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SalidasInvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
