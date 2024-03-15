import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSalidaInvComponent } from './add-salida-inv.component';

describe('AddSalidaInvComponent', () => {
  let component: AddSalidaInvComponent;
  let fixture: ComponentFixture<AddSalidaInvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddSalidaInvComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddSalidaInvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
