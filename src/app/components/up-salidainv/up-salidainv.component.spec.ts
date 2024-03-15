import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpSalidainvComponent } from './up-salidainv.component';

describe('UpSalidainvComponent', () => {
  let component: UpSalidainvComponent;
  let fixture: ComponentFixture<UpSalidainvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpSalidainvComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpSalidainvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
