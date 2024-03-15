import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpEntradainvComponent } from './up-entradainv.component';

describe('UpEntradainvComponent', () => {
  let component: UpEntradainvComponent;
  let fixture: ComponentFixture<UpEntradainvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpEntradainvComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpEntradainvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
